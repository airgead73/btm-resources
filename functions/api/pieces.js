const cors = require('cors')({ origin: true });
const DB = require('./admin');

const BASE_URL = 'https://res.cloudinary.com/dpm/image/upload/w_750/l_text:Verdana_12_normal:%C2%A9%20Brian%20Moneypenny,g_south_east,y_8,x_8,co_rgb:FFFFFF/bmoneypenny/work/'

const retrieveImages = (res) => {
  let images = [];
  return DB.collection('images')
         .get()
         .then((snapshot) => {
           images = snapshot.docs.map(doc => ({
             id: doc.id,
             ...doc.data()
           }));
         })
         .then(() => {
           res.status(200).json(images);
         })
         .catch((err) => {
           res.status(err.status).json({
             message: err.message
           });
         })
}

const retrieveModality = (res, modality) => {
  let images = [];
  return DB.collection('images')
         .where("modality", "==", modality)
         .get()
         .then((snapshot) => {
          images = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
         })
         .then(() => {
           res.status(200).json(images);
         })
         .catch((err) => {
           res.status(err.status).json({
             message: err.message
           });
         })
}

const retrieveCategory = (res, modality, category) => {
  let images = [];
  return DB.collection('images')
         .where("modality", "==", modality)
         .where("category", "==", category)
         .get()
         .then((snapshot) => {
          images = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
         })
         .then(() => {
           res.status(200).json(images);
         })
         .catch((err) => {
           res.status(err.status).json({
             message: err.message
           });
         })
}

const getImages = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    //res.status(202).send("get all images");
    retrieveImages(res);
  });
}

const getModality = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    const modality = req.query.modality;
    //res.status(202).send(`get ${modality}`);
    retrieveModality(res, modality);

  });
}

const getCategory = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    const modality = req.query.modality;
    const category = req.query.category;
    //res.status(202).send(`get ${modality} | ${category}`);
    retrieveCategory(res, modality, category);

  });
}

module.exports = {
  getImages,
  getModality,
  getCategory
}