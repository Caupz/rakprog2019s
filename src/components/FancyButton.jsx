import React from "react";
import { FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";
import "./fancybutton.css";

const FancyButton = ({children}) => (
    <div className={"btn btn--fancy"}>
        <div>
            {children}
        </div>
        <FaAngleRight/>
    </div>
);

FancyButton.propTypes = {
    children: PropTypes.string.isRequired,
};

export default FancyButton;