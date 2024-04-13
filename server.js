const express = require("express");
const mongoose = require("mongoose");

let app = express();
let port = process.env.port || 3000;

let client = require("./dbConnection");
let router = require("./routes/routes");

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/cat", router);

// app.post("/api/cat", (req, res) => {
//   console.log("sasas");
// });

// const cardSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   link: String,
//   description: String,
// });

// const Card = mongoose.model("Card", cardSchema);

// async function postCat(cat) {
//   await client.connect();
//   let collection = await client.db().collection('Cats');
//   return collection.insertOne(cat);
// }

// async function getAllCats() {
//   await client.connect();
//   let collection = await client.db().collection('Cats');
//   return collection.find().toArray();
// }

app.listen(port, () => {
  console.log("server started");
  //run().catch(console.dir);;
});
