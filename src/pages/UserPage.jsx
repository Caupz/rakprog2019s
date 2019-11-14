import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton";
//import authConsumer from "../components/authConsumer.jsx";
//import protectedRedirect from "../components/protectedRedirect.jsx";
import {userUpdate, tokenUpdate} from "../store/actions";

class UserPage extends React.PureComponent {
    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
    };

    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    };

    render() {
        return (
            <div className={"spacer"}>
                <div className={"box"}>
                    <div>
                        <div className={"field"}>
                            {this.props.user.email}
                        </div>
                        <div className={"field"}>
                            {this.props.user.createdAt}
                        </div>
                    </div>
                    <FancyButton onClick={this.handleLogout}>Logi välja</FancyButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.user
    };
};

export default connect(mapStateToProps)(UserPage);

//export default authConsumer(protectedRedirect(UserPage));