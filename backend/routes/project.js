'use strict'

var express = require('express');
var projectController = require('../controllers/project');

var route = express.Router();
route.get('/home',projectController.home);
route.post('/test',projectController.test);
route.get('/',projectController.getListProyect);
route.get('/:id',projectController.getProject);
route.post('/',projectController.saveProyect);
route.put('/:id',projectController.updateProyect);

module.exports = route;