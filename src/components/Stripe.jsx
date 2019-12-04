import React from "react";
import {StripeProvider} from "react-stripe-elements";
import {Elements, CardElement, injectStripe} from "react-stripe-elements";
import "./stripe.css";
import PropTypes from "prop-types";

class Stripe extends React.PureComponent {
    static propTypes = {
        sum: PropTypes.number.isRequired
    };

    render() {
        return (
            <StripeProvider apiKey={"pk_test_c4T7eZyrnB77jLTwWBbijLwV006uBE3nWm"}>
                <Elements>
                    <InjectedStripeForm sum={this.props.sum} />
                </Elements>
            </StripeProvider>
        );
    }
}

export default Stripe;

class StripeForm extends React.PureComponent {
    static propTypes = {
        stripe: PropTypes.object.isRequired,
        sum: PropTypes.number.isRequired
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.stripe.createToken().then(function({error, token}) {
            console.log("stripe result", error, token);
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

const InjectedStripeForm = injectStripe(StripeForm);