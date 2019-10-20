import React from "react";
import "./form.css";
import { Link } from "react-router-dom";

class SignupPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordConfirm: "",
            email:""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", e, this.state);
        fetch("/api/v1/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {
            console.log("response", res);
        })
        .catch(err => {
            console.log("error", err);
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
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
                        <input
                            placeholder={"Confirm password"}
                            name="passwordConfirm"
                            type={"password"}
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange} />
                    </p>
                    <p>
                        <input type="submit" value="Create" />
                    </p>
                    <Link to={"/login"}>Already registered? Login</Link>
                </form>
            </div>
        );
    }
}

export default SignupPage;