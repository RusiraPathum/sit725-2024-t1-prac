let express = require("express");
let catModal = require("express");
let router = express.Router();

function getCats() {}

async function postCat(cat) {
  await client.connect();
  let collection = await client.db().collection("Cats");
  return collection.insertOne(cat);
}

module.exports = { getCats, postCat };
