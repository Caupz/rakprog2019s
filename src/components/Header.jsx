import React from "react";
import { Link } from "react-router-dom";
import {userIcon, cartIcon, loginIcon } from "../icons";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({token, user}) => {
    console.log("header", token);
    return (
        <div className={"container"}>
        <div className="header-container">
            <div className="logo-container">
                <Link to={"/"}>
                    <img src="http://gtav.ee/gtaveelogo.png" alt="GTAV.ee Logo"/>
                </Link>
            </div>
            <div className="btns-container">
                <input id="search" placeholder="Otsi..." type="text"/>
                {user.email && <WelcomeIcon user={user}/>}
                {!user.email && <LoginRegisterIcon />}
                <a href="#"><img className={"header-icon cart-icon"} src={cartIcon} alt={"Cart Icon"} />Cart</a>
            </div>
        </div>
        </div>
    );
};

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.object,
};

const LoginRegisterIcon = () => (
    <>
        <Link to={"/login"}><img className={"header-icon login-icon"} src={loginIcon} alt={"Login Icon"} />Login</Link>
        <Link to={"/signup"}><img className={"header-icon user-icon"} src={userIcon} alt={"User Icon"} />Signup</Link>
    </>
);

const WelcomeIcon = ({user}) => (
    <>
        <Link to={`/users/${user._id}`}>
            <img className={"header-icon login-icon"} src={loginIcon} alt={"Login Icon"} />
            Welcome, {user.email}
        </Link>
    </>
);

WelcomeIcon.propTypes = {
    user: PropTypes.object,
};

export default Header;