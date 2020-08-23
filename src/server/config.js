const express = require('express');
const app = express();
const ruta = require('../routes')

app.use(express.json({extended: true}));

app.use('/api/',ruta);

module.exports = app;