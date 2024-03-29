'use strict'

var express = require('express');
var {GetAll,GetById,Post,Delete, Put, UploadImage, DownloadImage} = require('../controllers/project');

var route = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});

route.get('/',GetAll);
route.get('/:id',GetById);
route.post('/',Post);
route.put('/:id',Put);
route.delete('/:id',Delete);
route.post('/uploadImage/:id',multipartMiddleware,UploadImage);
route.get('/image/:id',DownloadImage);


module.exports = route;