const express = require('express');
const path = require('path');
const logger = require('morgan');

const productsRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/products', productsRouter);

module.exports = app;
