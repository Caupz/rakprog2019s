import React from "react";
import ReactDOM from "react-dom";

window.addEventListener("load", () =>{
    const root = document.getElementById("app");
    ReactDOM.render(
        <button>Hello World</button>,
        root
    );
});