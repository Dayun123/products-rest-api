const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    statusCode: 200,
    statusMessage: 'Get All Products',
  });
});

module.exports = router;