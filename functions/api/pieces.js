const cors = require('cors')({ origin: true });
//const DB = require('./admin');

const piecesSculpture = [
  {
    id: 1,
    title: 'broncos',
    modality: 'sculpture',
    medium: 'bronze'
  },
  {
    id: 2,
    title: 'bob hope',
    modality: 'sculpture',
    medium: 'plaster'
  },
  {
    id: 3,
    title: 'woman',
    modality: 'sculpture',
    medium: 'marble'
  }   
];

const piecesPainting = [
  {
    id: 1,
    title: 'San Juan Bautista',
    modality: 'painting',
    medium: 'oil on canvas'
  },
  {
    id: 2,
    title: 'quayle',
    modality: 'painting',
    medium: 'oil on canvas'
  }   
];

const piecesDrawing = [
  {
    id: 1,
    title: 'stacey',
    modality: 'drawing',
    medium: 'pencil'
  }   
];

const piecesAbstract = [
  {
    id: 1,
    title: 'Abstract: broncos',
    modality: 'sculpture',
    medium: 'bronze'
  },
  {
    id: 2,
    title: 'Abstract: bob hope',
    modality: 'sculpture',
    medium: 'plaster'
  },
  {
    id: 3,
    title: 'Abstract: woman',
    modality: 'sculpture',
    medium: 'marble'
  }   
];

const piecesFigure = [
  {
    id: 1,
    title: 'Figure: San Juan Bautista',
    modality: 'painting',
    medium: 'oil on canvas'
  },
  {
    id: 2,
    title: 'Figure: quayle',
    modality: 'painting',
    medium: 'oil on canvas'
  }   
];

const piecesPortait = [
  {
    id: 1,
    title: 'Portrait: San Juan Bautista',
    modality: 'painting',
    medium: 'oil on canvas'
  },
  {
    id: 2,
    title: 'Portrait: quayle',
    modality: 'painting',
    medium: 'oil on canvas'
  }   
];

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
    switch(modality) {
      case 'sculpture':
        res.status(202).send(piecesSculpture);
        break;
      case 'painting':
        res.status(202).send(piecesPainting);
        break; 
      case 'drawing':
        res.status(202).send(piecesDrawing);
        break;          
    }
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
    switch(category) {
      case 'abstract':
        res.status(202).send(piecesAbstract);
        break;
      case 'figure':
        res.status(202).send(piecesFigure);
        break; 
      case 'portrait':
        res.status(202).send(piecesPortait);
        break;          
    }
  });
}

module.exports = {
  getImages,
  getModality,
  getCategory
}