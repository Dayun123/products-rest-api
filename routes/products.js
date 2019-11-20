const express = require('express');
const products = require('../data/products');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(products);
});

router.get('/:id', (req, res, next) => {
  const product = products.find((product) => product.id === +req.params.id);
  res.json(product);
});

module.exports = router;