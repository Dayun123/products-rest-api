const products = require('../data/products');

exports.validateProductKeys = (req, res, next) => {
  
  const requiredProductKeys = [
    'id',
    'name',
    'price',
    'category',
  ];

  const requestProductKeys = Object.keys(req.body);

  if (!requiredProductKeys.every(key => requestProductKeys.includes(key))) {
    next({
      statusCode: 422,
      statusMessage: 'To create a product the id, name, price, and category keys are required',
    });
  } else {
    next();
  }
};

exports.validateContentType = (req, res, next) => {
  if (req.get('Content-Type') !== 'application/json') {
    next({
      statusCode: 400,
      statusMessage: 'Content-Type must be application/json',
    });
  } else {
    next();
  }
};

exports.validateId = id => !isNaN(id) && id > 0;

exports.validateUniqueId = (req, res, next) => {
  if (products.find(product => product.id === req.body.id)) {
    next({
      statusCode: 422,
      statusMessage: 'Cannot create product, id is already in use',
    });
  } else {
    next();
  }
};

exports.validateApiKey = (req, res, next) => {
  if (req.query.apiKey !== 'abc123') {
    next({
      "statusCode": 401,
      "statusMessage": "Must provide a valid API Key"
    });
  } else {
    next();
  }
}