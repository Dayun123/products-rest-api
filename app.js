const express = require('express');
const path = require('path');
const logger = require('morgan');
const validate = require('./utils/validate');

const productsRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(validate.validateApiKey);

app.use('/products', productsRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode).json(err);
});

module.exports = app;
