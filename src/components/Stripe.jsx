import React from "react";
import {StripeProvider} from "react-stripe-elements";
import {Elements, CardElement} from "react-stripe-elements";
import "./stripe.css";

class Stripe extends React.PureComponent {
    render() {
        return (
            <StripeProvider apiKey={"pk_test_12345"}>
                <Elements>
                    <form className={"stripe-form"}>
                        <label>
                            Card details
                            <CardElement style={{base: {fontSize: "18px"}}} />
                        </label>
                        <button className={"stripe-btn"}>Pay maneis</button>
                    </form>
                </Elements>
            </StripeProvider>
        );
    }
}

export default Stripe;