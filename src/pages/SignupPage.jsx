import React from "react";
import "./form.css";

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
                    <a href={"/login"}>Already registered? Login</a>
                </form>
            </div>
        );
    }
}

export default SignupPage;