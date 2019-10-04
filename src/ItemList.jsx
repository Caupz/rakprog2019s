import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemList = (props) => {
    return(
        <div className={"products"}>
            {
                props.items.map( item => {
                    return <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imgSrc={item.imgSrc}
                    />;
                })
            }
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

const Item = (props) => {
    return(
        <Link  className="product" to={`/items/${props.id}`}>
            <img alt={props.title} src={props.imgSrc} className="product-image" />
            <p className="product-title">{props.title}</p><p className="product-cost">{props.price}</p>
        </Link>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default ItemList;