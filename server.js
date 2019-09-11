const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

/*app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
app.use(express.static('public'))*/

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.use(express.static('dist'));

//app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.listen(process.env.PORT || PORT, () => {
  console.log("Server started", PORT);
});

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://caupo:Solarion1@cluster0-zsibm.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});