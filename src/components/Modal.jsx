import React from "react";
import "./modal.css";
import {IoMdCloseCircle} from "react-icons/all";
import cx from "classnames";
import PropTypes from "prop-types";

const Modal = ({children, open, onClose}) => (
  <div className={cx("modal", {open})}>
      <div className={"modal-inner"}>
          <IoMdCloseCircle className={"close-icon"} onClick={onClose} />
          {children}
      </div>
  </div>
);

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired
};

export default Modal;