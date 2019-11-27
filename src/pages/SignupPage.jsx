import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {toast} from "react-toastify";
import * as services from "../services";

class SignupPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email:""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", e, this.state);
        services.signup(this.state)
        .then(data => {
            console.log("response handleSubmit", data);
            this.props.history.push("/login");
            toast.success("Registration successful");
        })
        .catch(err => {
            console.log("error", err);
            toast.error("Registration failed");
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <>
            <div className={"container"}>
            <h1>Signup</h1>
            <div className={"form"}>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input
                            placeholder={"Email"}
                            name="email"
                            type={"email"}
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </p>
                    <p>
                        <input
                            placeholder={"Password"}
                            name="password"
                            type={"password"}
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </p>
                    <p>
                        <input className={"btn btn--fancy"} type="submit" value="Create" />
                    </p>
                    <Link to={"/login"}>Already registered? Login</Link>
                </form>
            </div>
            </div>
            </>
        );
    }
}

export default SignupPage;