import React from "react";
import { Link } from "react-router-dom";
import {userIcon, cartIcon, loginIcon } from "../icons";
import "./header.css";

const Header = () => {
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

                <a href="#"><img className={"header-icon login-icon"} src={loginIcon} alt={"Login Icon"} />Login</a>
                <a href="#"><img className={"header-icon user-icon"} src={userIcon} alt={"User Icon"} />Signup</a>
                <a href="#"><img className={"header-icon cart-icon"} src={cartIcon} alt={"Cart Icon"} />Cart</a>
            </div>
        </div>
        </div>
);
};

export default Header;