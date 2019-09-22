import React from "react";
import { Link } from "react-router-dom";

const ItemList = (props) => {
    return(
        <div>
            {
                props.items.map( item => {
                    return <Item
                        title={item.title}
                        price={item.price}
                        imgSrc={item.imgSrc}
                    />
                })
            }
        </div>
    );
}

const Item = (props) => {
    return(
        <Link to={"/item"}>
            <div className="product">
                <img alt={props.title} src={props.imgSrc} className="product-image" />
                <p className="product-title">{props.title}</p><p className="product-cost">{props.price}</p>
            </div>
        </Link>
    )
};

export default ItemList;