const functions = require('firebase-functions');

const {
  getImages,
  getModality,
  getCategory
} = require('./api/pieces');

module.exports = {
  getImages: functions.https.onRequest(getImages),
  getModality: functions.https.onRequest(getModality),
  getCategory: functions.https.onRequest(getCategory)
}
