import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

const Checkbox = ({name, onChange, checked}) => (
    <div className={"d-inline-block"}>{name}
        <input className={"tgl tgl-ios"}
               id={name}
               name={name}
               type={"checkbox"}
               checked={checked}
               onChange={onChange} />

        <label className="tgl-btn" htmlFor={name}></label>
    </div>
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
};

export default Checkbox;