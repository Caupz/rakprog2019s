import React from "react";
import ReactDOM from "react-dom";

window.addEventListener("load", () =>{
    const node = document.getElementById("app");
    ReactDOM.render(
        React.createElement(
            "button",
            {},
            "I am a button, Hello world"
        ),
        node,
    );
});