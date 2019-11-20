const express = require('express');
const products = require('../data/products');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(products);
});

module.exports = router;