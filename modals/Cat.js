let client = require('../dbConnection');
let collection;

async function getAllCats() {
    await client.connect();
    let collection = await client.db().collection('Cats');
    return collection.find().toArray();
  }

  async function postCat(cat) {
  await client.connect();
  collection = await client.db().collection('Cats');
  return collection.insertOne(cat);
}

module.exports = {getAllCats, postCat}