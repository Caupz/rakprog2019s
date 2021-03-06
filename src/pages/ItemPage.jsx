import React from "react";
import Footer from "../components/Footer.jsx";
import PropTypes from "prop-types";
import "./itempage.css";
import FancyButton from "../components/FancyButton.jsx";
import {connect} from "react-redux";
import {addItem} from "../store/actions";
import * as services from "../services";

class ItemPage extends React.PureComponent{

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.fetchItem();
    }

    fetchItem = () => {
        services.getItem(this.props.match.params.itemId)
            .then(item => {
                this.setState({
                    ...item
                });
            })
            .catch(err => {
                console.log("item page err", err);
            });
    };

    handleBuy = () => {
        this.props.dispatch(addItem(this.state));
    };

    render() {
        return (
            <>
                <div className={"container"}>
                    <div className={"itemContainer"}>
                        <img src={this.state.imgSrc} alt={this.state.title}/>
                        <div>
                        <div className={"item__title"}>
                            {this.state.title}
                        </div>
                        <div className={"item__price"}>
                            {this.state.price}
                        </div>
                        <FancyButton onClick={this.handleBuy}>Osta</FancyButton>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </>
        );
    }
}

ItemPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default connect()(ItemPage);