import React from "react";
import PropTypes from "prop-types";
import "./dropdown.css";

class SortDropdown extends React.PureComponent {
    state = {
        open: false,
    };

    handleTrigger = () => {
        console.log("aasd");
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        return(
            <div className={"custom-select-wrapper"} onClick={this.handleTrigger}>
                <div className={`custom-select-sources ${this.state.open ? "opened" : ""}`}>
                    <span className={"custom-select-trigger"}>{getDirectionText(this.props.direction)}</span>

                    <div className={"custom-options"}>
                        <span className={"custom-option"} onClick={() => this.props.onChange(1)}>{getDirectionText(1)}</span>
                        <span className={"custom-option"} onClick={() => this.props.onChange(-1)}>{getDirectionText(-1)}</span>
                    </div>
                </div>
            </div>
        );
    }
}

const getDirectionText = (x) => {
    switch (x) {
        case 1: return "Price low to high";
        case -1: return "Price high to low";
    }
};

SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SortDropdown;

/*
    <div className={"custom-select-wrapper"}>
        <div className={"custom-select sources"}>
            <span className={"custom-select-trigger"}>Sort price</span>

            <div className={"custom-options"}>
                <span className={"custom-option"}>Price low to high</span>
                <span className={"custom-option"}>Price high to low</span>
            </div>
        </div>
    </div>

    <div>
        <select value={direction} onChange={onChange} className={"custom-select sources"}>
            <option value={"-1"}>Price high to low</option>
            <option value={"1"}>Price low to high</option>
        </select>
    </div>
* */