const db = require("../connectDb");
const collections = require("../data/collectionsToUpdate");

const countCollections = (data, context) => {
  const promises = collections.map((collection) => {
    return db.collection(`${collection}`).get().then((result) => {
      db.doc(`counter/${collection}`).set({count: result.docs.length});
    });
  });
  return Promise.all(promises);
};

module.exports = countCollections;
