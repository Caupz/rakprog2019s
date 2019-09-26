import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {phones} from "./mydatabase.js";

class ItemPage extends React.PureComponent{

    render() {
        const item = phones[0];

        return (
            <>
                <Header/>
                <div className={"itemContainer"}>
                    <img src={item.imgSrc} alt={item.title}/>
                    <div className={"item__title"}>
                        {item.title}
                    </div>
                    <div className={"item__price"}>
                        {item.price}
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default ItemPage;