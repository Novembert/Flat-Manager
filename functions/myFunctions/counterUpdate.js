const db = require("../connectDb");

const updateCounter = (change, context, collection) => {
  return db.collection(`${collection}`).get().then((result) => {
    db.doc(`counter/${collection}`).set({count: result.docs.length});
  });
};

module.exports = updateCounter;
