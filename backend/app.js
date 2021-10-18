'use strict'

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

//archivos de rutas
var project_routers = require('./routes/project');

//middleware
app.use(express.json())

//CORS

//rutas
app.use('/api/project',project_routers);


//export
module.exports = app;