const express = require('express');
const products = require('../data/products');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(products);
});

router.get('/:id', (req, res, next) => {
  res.json({
    id: req.params.id
  });
});

module.exports = router;