import React from "react";
import { Link } from "react-router-dom";

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
                <a href="#">Login</a>
                <a href="#">Signup</a>
                <a href="#">Cart</a>
            </div>
        </div>
);
};

export default Header;