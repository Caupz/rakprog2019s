import React from "react";
import { Link } from "react-router-dom";
import {userIcon, cartIcon, loginIcon } from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";
import {connect} from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";

const Header = ({user, cart}) => {
    return (
        <div className={"container"}>
            <div className="header-container">
                <div className="logo-container">
                    <Link to={"/"}>
                        <img src="/static/images/gtaveelogo.png" alt="GTAV.ee Logo"/>
                    </Link>
                </div>
                <div className="btns-container">
                    <input id="search" placeholder="Otsi..." type="text"/>
                    {user.email && <WelcomeIcon user={user}/>}
                    {!user.email && <LoginRegisterIcon />}
                    <Link to={"/checkout/cart"}>
                        <img className={"header-icon cart-icon"} src={cartIcon} alt={"Cart Icon"} />
                        Cart
                        <Badge>{cart.length}</Badge>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.object,
    cart: PropTypes.arrayOf(ItemProps).isRequired,
};

const Badge = ({children}) => {
    if(children === 0) return null;
    return(
        <span className={"badge"}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.number.isRequired
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

const mapStateToProps = (store) => {
    return {
        cart: store.cart,
    };
};
export default connect(mapStateToProps)(authConsumer(Header));