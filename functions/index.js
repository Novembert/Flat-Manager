const functions = require("firebase-functions");
const collections = require("./data/collectionsToUpdate");
const counterUpdate = require("./myFunctions/counterUpdate");
const _ = require("lodash");

const updaterPromisesCreate = collections.map((el) => {
  return functions.firestore.document(`${el}/{id}`)
      .onCreate((request, response) => counterUpdate(request, response, el));
});

const updaterPromisesDelete = collections.map((el) => {
  return functions.firestore.document(`${el}/{id}`)
      .onDelete((request, response) => counterUpdate(request, response, el));
});

const createUpdaters = {};
const deleteUpdaters = {};

for (let i = 0; i < collections.length; i++) {
  /* eslint-disable max-len */
  createUpdaters[`createUpdate${_.capitalize(collections[i])}`] = updaterPromisesCreate[i];
  deleteUpdaters[`deleteUpdate${_.capitalize(collections[i])}`] = updaterPromisesDelete[i];
}

Object.assign(exports, createUpdaters);
Object.assign(exports, deleteUpdaters);
