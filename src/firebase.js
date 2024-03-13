require("dotenv").config();
const { initializeApp } = require("firebase-admin/app");

const { applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

module.exports = {
  db,
};