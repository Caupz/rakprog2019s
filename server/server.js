const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
require('dotenv').config();

var kittySchema = new mongoose.Schema({
   name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);
const kitten1 = new Kitten({
   name: "red cat 1"
});

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-zsibm.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
    .then(() => {
        console.log("DB Access success");
        kitten1.save(err => {
            if(err) {
                console.log("Kitten error: ", err);
            } else {
                console.log("Kitten save success.");
            }
        });
    })
    .catch(err => {
        console.log("DB Access error: ", err);
    });

app.get("/api/items", (req, res) => {
    res.json(DB.getItems());
});

app.get("/api/items/:itemId", (req, res) => {
    res.send(DB.getItem(req.params.itemId));
});

app.post("/hello", (req, res) => {
    res.send("post world");
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

app.listen(PORT, () => {
    console.log("Server started", PORT);
    console.log(`http://localhost:${PORT}`);
});
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://caupo:Solarion1@cluster0-zsibm.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/