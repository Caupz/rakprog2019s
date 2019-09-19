import homepage from "./homepage.js";
import itempage from "./itempage.js";

console.log("I am index file");

window.addEventListener("load", () =>{
    homepage.setup();
    itempage.setup();
});