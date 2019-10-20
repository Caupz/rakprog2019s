import React from "react";
import "./form.css";
import { Link } from "react-router-dom";

class LoginPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", e, this.state);
        fetch("/api/users/login", {
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
                        placeholder={"email"}
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
                    <input type="submit" value="Login" />
                </p>
                <Link to={"/signup"}>Not registered? Create an account</Link>
            </form>
            </div>
        );
    }
}

export default LoginPage;