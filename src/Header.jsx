import React from "react";
import { Link } from "react-router-dom";
import {userIcon, cartIcon } from "./icons";
import "./header.css";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <Link to={"/"}>
                    <img src="http://gtav.ee/gtaveelogo.png" alt="GTAV.ee Logo"/>
                </Link>
            </div>
            <div className="btns-container">
                <input id="search" placeholder="Otsi..." type="text"/>
                <img className={"user-icon"} src={userIcon} alt={"User Icon"} />
                <img className={"cart-icon"} src={cartIcon} alt={"Cart Icon"} />
                <a href="#">Login</a>
                <a href="#">Signup</a>
                <a href="#">Cart</a>
            </div>
        </div>
);
};

export default Header;