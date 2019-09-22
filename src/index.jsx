import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage.jsx";
import ItemPage from "./ItemPage.jsx";
import {phones, laptops} from "./mydatabase.js"
import { BrowserRouter, Route, Link } from "react-router-dom";

window.addEventListener("load", () =>{
    const root = document.getElementById("app");
    ReactDOM.render(
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
            <Route path="/item" exact component={ItemPage} />
        </BrowserRouter>,
        root
    );
});