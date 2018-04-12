const express = require('express');
const router = require('./routes/index.js');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/views'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router);

module.exports = app;