import React from "react";
import "./form.css";

class LoginPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", e, this.state);
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
                        placeholder={"Name"}
                        name="username"
                        type={"text"}
                        value={this.state.username}
                        onChange={this.handleChange} />
                </p>
                <p>
                    <input
                        placeholder={"Password"}
                        name="password"
                        type={"text"}
                        value={this.state.password}
                        onChange={this.handleChange} />
                </p>
                <p>
                    <input type="submit" value="Login" />
                </p>
                <a href={"/signup"}>Not registered? Create an account</a>
            </form>
            </div>
        );
    }
}

export default LoginPage;