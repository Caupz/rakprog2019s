import React from "react";
import { Link } from "react-router-dom";
import {userIcon, cartIcon, loginIcon } from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";
import {UserPropTypes} from "../store/reducer";
import * as selectors from "../store/selectors";

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
                    {user && <WelcomeIcon user={user}/>}
                    {!user && <LoginRegisterIcon />}
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
    user: PropTypes.shape(UserPropTypes),
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
    user: PropTypes.shape(UserPropTypes),
};

const mapStateToProps = (store) => {
    return {
        cart: selectors.getCart(store),
        user: selectors.getUser(store),
    };
};
export default connect(mapStateToProps)(Header);