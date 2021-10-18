'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(()=>{
        console.log("Coneccion a base de datos fue con exito...");

        //creacion de servidor
        app.listen(port,()=>{
            console.log("servidor corriendo correctamente en la url localhost:3700");
        });
    })
    .catch(err=>{
        console.log(err);
    });
