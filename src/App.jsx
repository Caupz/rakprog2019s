import React from "react";
import store from "./store/configureStore.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header.jsx";
import Pages from "./pages/index.jsx";
import "typeface-quicksand";
import "./pages/main.css";
import {Provider} from "react-redux";



class App extends React.Component {

    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Route path={"/"} component={Header} />
                    <Switch>
                        <Route path="/" exact component={Pages.HomePage} />
                        <Route path="/login" exact component={Pages.LoginPage} />
                        <Route path="/signup" exact component={Pages.SignupPage} />
                        <Route path="/users/:userId" exact component={Pages.UserPage} />
                        <Route path="/items/:itemId" exact component={Pages.ItemPage} />
                        <Route path="/checkout/cart" exact component={Pages.CartPage} />
                        <Route component={Pages.NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;