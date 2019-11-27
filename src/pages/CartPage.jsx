import React from "react";
import PropTypes from "prop-types";
//import {getItems} from "../actions/itemsActions";
import { FaRegTrashAlt } from "react-icons/fa";
import "../components/cart.css";
import FancyButton from "../components/FancyButton.jsx";
import {connect} from "react-redux";
import {removeItem} from "../store/actions";
import {toast} from "react-toastify";
import * as selectors from "../store/selectors";

class CartPage extends React.PureComponent {
    static propTypes = {
        cart: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    calcNumbers = () => {
        const VAT = 20;
        const sum = Math.round(this.props.cart.reduce((acc, item) => acc + item.price, 0));
        const tax = Math.round(sum / 100 * VAT);
        return {
            sum, tax
        };
    };

    handleTrash = (_id) => {
        this.props.dispatch(removeItem(_id));
        toast.success("Toode eemaldatud");
    };

    render() {
        const {sum, tax} = this.calcNumbers();

        return (
            <div className={"container"}>
            <div className={"spacer"}>
                <div className={"box cart"}>
                    <Table
                        onTrashClick={this.handleTrash}
                        rows={this.props.cart}
                    />
                </div>
                <div className={"box cart__summary"}>
                    <table>
                        <tbody>
                            <tr><td>Vahesumma</td><td>{sum} €</td></tr>
                            <tr><td>Maksud</td><td>{tax} €</td></tr>
                            <tr><td>Kokku</td><td>{tax + sum} €</td></tr>
                        <tr>
                            <td></td>
                            <td>
                                <FancyButton onClick={() => console.log("Vormista ost btn")}>
                                    Vormista ost
                                </FancyButton>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }
}

const Table = ({rows, onTrashClick}) => {
    return(
        <div className={"table"}>
            <div className={"row"}>
                <div className={"cell"}>Toode</div>
                <div className={"cell cell--grow"}>Nimetus</div>
                <div className={"cell"}>Kategooria</div>
                <div className={"cell cell--right"}>Summa</div>
                <div className={"cell cell--small"}></div>
            </div>
            {rows.map((row, index) => <Row onTrashClick={onTrashClick} key={index} {...row} />)}
        </div>
    );
};

Table.propTypes = {
    rows: PropTypes.array.isRequired,
    onTrashClick: PropTypes.func.isRequired,
};

const Row = ({_id, title, imgSrc, category, price, onTrashClick}) => {
    return (
        <div className={"row content"}>
            <div className={"cell"}>
                <img src={imgSrc} />
            </div>
            <div className={"cell cell--grow"}>
                {title}
            </div>
            <div className={"cell"}>
                {category}
            </div>
            <div className={"cell cell--right"}>
                {price} €
            </div>
            <div className={"cell cell--small cell--center"}>
                <FaRegTrashAlt
                    title={"Eemalda"}
                    className={"trash-btn"}
                    onClick={() => onTrashClick(_id)}
                />
            </div>

        </div>
    );
};

export const ItemProps = {
    _id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

Row.propTypes = {
    ...ItemProps,
    onTrash: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => {
    return {
        cart: selectors.getCart(store)
    };
};

export default connect(mapStateToProps)(CartPage);