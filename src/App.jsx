import React from "react";
import "typeface-quicksand";
import "./pages/main.css";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore.js";
import { PersistGate } from "redux-persist/integration/react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./components/Router";

const {store, persistor} = configureStore();

class App extends React.Component {

    render() {
        return(
            <>
                <ToastContainer enableMultiContainer position={toast.POSITION.BOTTOM_LEFT} />
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Router/>
                    </PersistGate>
                </Provider>
            </>
        );
    }
}

export default App;