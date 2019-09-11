const homepage = require("./homepage.js");
const itempage = require("./itempage.js");

console.log("I am index file");

window.addEventListener("load", () =>{
    homepage.setup();
    itempage.setup();
});