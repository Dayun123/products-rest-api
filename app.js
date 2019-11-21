const express = require('express');
const path = require('path');
const logger = require('morgan');

const productsRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use((req, res, next) => {
  if (req.query.apiKey !== 'abc123') {
    next({
      "statusCode": 401,
      "statusMessage": "Must provide a valid API Key"
    });
  } else {
    next();
  }
});

app.use('/products', productsRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode).json(err);
});

module.exports = app;
