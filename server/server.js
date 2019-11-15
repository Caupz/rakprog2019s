const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const itemRouter = require("./item.router.js");
const userRouter = require("./user.router.js");
const authRouter = require("./auth.router.js");
const bodyParser = require("body-parser");
const database = require("./database.js");

if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

app.use(bodyParser.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1", itemRouter);
app.use("/api/v1/users", userRouter);

app.use("/static", express.static("dist/static"));
app.use("/*", express.static("dist"));


app.use(express.static('dist'));

function listen() {
    app.listen(PORT, () => {
        console.log("Server started", PORT);
        console.log(`http://localhost:${PORT}`);
    });
}

database.connect()
    .then(() => {
        listen();
    }).catch(err => {
        console.log("error on database connect", err);
    });