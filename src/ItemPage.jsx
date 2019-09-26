import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PropTypes from "prop-types";

class ItemPage extends React.PureComponent{

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.fetchItem();
    }

    fetchItem = () => {
        fetch(`/api/items/${this.props.match.params.itemId}`)
            .then(res => {
                return res.json();
            })
            .then(item => {
                console.log("item", item);
                this.setState({
                    ...item
                });
            })
            .catch(err => {
                console.log("item page err", err);
            });
    }

    render() {
        return (
            <>
                <div className={"container"}>
                <Header/>
                <div className={"itemContainer"}>
                    <img src={this.state.imgSrc} alt={this.state.title}/>
                    <div className={"item__title"}>
                        {this.state.title}
                    </div>
                    <div className={"item__price"}>
                        {this.state.price}
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

export default ItemPage;