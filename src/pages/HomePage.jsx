import React from "react";
import Footer from "../components/Footer.jsx";
import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "./homepage.css";
import SortDropdown from "../components/SortDropdown.jsx";

class HomePage extends React.PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            sortDirection: 1,
            items: [],
            allCategories: ["phones", "laptops"],
            selectedCategories: ["phones"]
        };
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems = () => {
        fetch("/api/v1/items")
            .then(res => {
                console.log("res", res);
                return res.json();
            })
            .then(items => {
                console.log("items", items);
                this.setState({
                    items
                });
            })
            .catch(err => {
                console.log("err", err);
            });
    };

    handleFilterSelect = (event) => {
        const categoryName = event.target.name;
        console.log(event.target.value, event.target.name);
        if(this.isSelected(categoryName)) return this.unselectCategory(categoryName);

        this.selectCategory(categoryName);
    };

    selectCategory = (categoryName) => {
        this.setState({
            selectedCategories: this.state.selectedCategories.concat([categoryName])
        });
    };

    unselectCategory = (categoryName) => {
        const newArr = this.state.selectedCategories.filter(cn => cn !== categoryName);

        this.setState({
            selectedCategories: newArr
        });
    };

    getVisibleItems = () => {
        return this.state.items
            .filter(item => this.isSelected(item.category))
            .sort((a, b) => {
                switch(this.state.sortDirection) {
                    case 1: return a.price - b.price;
                    case -1: return b.price - a.price;
                }
            });
    };

    isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

    handleSortDropdown = (sortDirection) => {
        console.log("sort", event.target.value);
        this.setState({
            sortDirection: sortDirection, // või siis lihtsalt sortDirection kui sama param name
        });
    };

    render() {
        console.log("this.state", this.state);
        const items = this.getVisibleItems();
        return (
            <>
                hello
                <div className={"container"}>
                    <ItemFilters
                        allCategories={this.state.allCategories}
                        handleDropdown={this.handleFilterSelect}
                        isSelected={this.isSelected}
                    />
                    <div className={"items-settings"}>
                        <div>Items found {items.length} {this.state.selectedCategories.join(", ")}</div>
                        <SortDropdown
                            direction={this.state.sortDirection}
                            onChange={this.handleSortDropdown}
                        />
                    </div>
                    <ItemList items={items}/>
                    <Footer/>
                </div>
            </>
        );
    }
}

const ItemFilters = ({allCategories, handleDropdown, isSelected}) => {
    return(
        <div className={"itemFilters-wrapper"}>
        {
            allCategories.map(categoryName => {
                return (
                    <Checkbox
                        onChange={handleDropdown}
                        key={categoryName}
                        name={categoryName}
                        checked={isSelected(categoryName)}
                    />
                );
            })
        }
        </div>
    );
};

ItemFilters.propTypes = {
    allCategories: PropTypes.array.isRequired,
    handleDropdown: PropTypes.func.isRequired,
    isSelected: PropTypes.func.isRequired,
};

export default HomePage;