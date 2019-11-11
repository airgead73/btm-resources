const cors = require('cors')({ origin: true });
//const DB = require('./admin');

const getImages = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    res.status(202).send('get all images');
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
    res.status(202).send(`modality: ${modality}`);
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
    res.status(202).send(`modality: ${modality} | category: ${category}`);
  });
}

module.exports = {
  getImages,
  getModality,
  getCategory
}