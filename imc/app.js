const express = require('express');
const imcController = require('./imcController');

const app = express();

app.use(express.json());

app.post('/imc', imcController.calcular);

module.exports = app;
