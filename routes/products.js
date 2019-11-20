const express = require('express');
const products = require('../data/products');

const router = express.Router();

router.param('id', (req, res, next) => {
  if ( isNaN(+req.params.id) || (+req.params.id < 1) ) {
    res.status(422).json({
      statusCode: 422,
      statusMessage: ':id parameter must be a number and must be greater than 0',
    });
  } else {
    next();
  }
});

router.get('/', (req, res, next) => {
  res.json(products);
});

router.get('/:id', (req, res, next) => {
  const product = products.find((product) => product.id === +req.params.id);
  res.json(product);
});

module.exports = router;