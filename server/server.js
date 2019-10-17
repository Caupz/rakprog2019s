const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
require('dotenv').config();
const itemRouter = require("./item.router.js");
const userRouter = require("./user.router.js");
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-zsibm.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const Item = require("./item.model.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(itemRouter);
app.use(userRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

function listen() {
    app.listen(PORT, () => {
        console.log("Server started", PORT);
        console.log(`http://localhost:${PORT}`);
    });
}

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("DB Access success");
        migrate();
        //deleteAllItems();
        listen();
    })
    .catch(err => {
        console.log("DB Access error: ", err);
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

/*
* Cons: Unclear when all products are saved
* */
function migrate() {
    console.log("Checking item counts.");

    Item.count({}, (err, itemCount) => {
        if(err) throw err;
        if(itemCount > 0) {
            console.log("Items exist, skipping item migration.");
            return;
        }
        console.log("Items missing so creating them.");
        saveAllItems();
    });
}

function deleteAllItems() {
    Item.deleteMany({}, (err, doc) => {
       console.log("err", err, "doc", doc);
    });
}

function saveAllItems() {
    console.log("migrate started");
    let itemSaved = 0;
    const items = DB.getItems();

    items.forEach(item => {
        const document = new Item(item);
        document.save((err) => {
            itemSaved++;

            if(itemSaved == items.length) {
                console.log("All items saved more or less.");
            }

            if(err) {
                console.log(err);
                throw new Error("Something happened during save");
            }
            console.log("Save success");
        })
    });
}