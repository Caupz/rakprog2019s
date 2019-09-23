import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            items: phones,
        }
    }

    handleChange = (event) => {
        switch (event.target.value) {
            case "phones": {
                this.setState({
                    items: phones
                });
                break;
            }
            case "laptops": {
                this.setState({
                    items: laptops
                });
                break;
            }
        }
    };

    render() {
        return (
            <>
                <div className={"container"}>
                <Header/>
                <select onChange={this.handleChange.bind(this)} className="category">
                    <option value="phones">Phones</option>
                    <option value="laptops">Laptops</option>
                </select>
                <ItemList items={this.state.items}/>
                <Footer/>
                </div>
            </>
        );
    }
};

export default HomePage;