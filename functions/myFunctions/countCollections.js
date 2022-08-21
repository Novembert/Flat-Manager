const db = require("../connectDb");
const collections = require("../data/collectionsToUpdate");

const countCollections = (request, response) => {
  const promises = collections.map((collection) => {
    return db.collection(`${collection}`).get().then((result) => {
      db.doc(`counter/${collection}`).set({count: result.docs.length});
    });
  });
  response.send(Promise.all(promises));
};

module.exports = countCollections;
