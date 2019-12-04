import React from "react";
import {StripeProvider} from "react-stripe-elements";
import {Elements, CardElement, injectStripe} from "react-stripe-elements";
import "./stripe.css";
import PropTypes from "prop-types";
import * as services from "../services";
import * as selectors from "../store/selectors";
import * as actions from "../store/actions";
import {connect} from "react-redux";

class Stripe extends React.PureComponent {
    static propTypes = {
        sum: PropTypes.number.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    render() {
        return (
            <StripeProvider apiKey={"pk_test_c4T7eZyrnB77jLTwWBbijLwV006uBE3nWm"}>
                <Elements>
                    <InjectedStripeForm sum={this.props.sum} onSubmit={this.props.onSubmit}/>
                </Elements>
            </StripeProvider>
        );
    }
}

export default Stripe;

class StripeForm extends React.PureComponent {
    static propTypes = {
        stripe: PropTypes.object.isRequired,
        sum: PropTypes.number.isRequired,
        userId: PropTypes.string.isRequired,
        token: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.stripe.createToken().then(({error, token}) => {
            console.log("stripe result", error, token);
            if(error) {
                console.log("checkout err", error);
                return;
            }
            services.checkout({stripeToken: token, userId: this.props.userId, token: this.props.token})
                .then(x => {
                    console.log("checkout", x);
                    this.props.dispatch(actions.refreshUser());
                    this.props.onSubmit();
                })
                .catch(err => {
                    console.log("checkout err", err);
                });
        });
    };

    render() {
        return (
            <form className={"stripe-form"} onSubmit={this.handleSubmit}>
                <label>
                    Card details
                    <CardElement style={{base: {fontSize: "18px"}}} />
                </label>
                <button className={"stripe-btn"}>Pay {this.props.sum}€</button>
            </form>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        userId: selectors.getUserId(store),
        token: selectors.getToken(store)
    };
};

const InjectedStripeForm = connect(mapStateToProps)(injectStripe(StripeForm));