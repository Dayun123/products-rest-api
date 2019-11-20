var express = require('express');
var path = require('path');
var logger = require('morgan');

const productsRouter = require('./routes/products');

var app = express();


app.use(logger('dev'));
app.use(express.json());

app.use('/products', productsRouter);

module.exports = app;
