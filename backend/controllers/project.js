'use strict'
var Project = require('../models/project');
var fs = require('fs');
var path = require('path');

var controller = {
    GetAll:function(req,res){
        Project.find({}).sort('-year').exec((err,listProject)=>{
            if(err) return res.status(500).send({message:"error interno"});
            if(!listProject) return res.status(204).send({message:"recurso no encontrado"});

            return res.status(200).send(listProject);
        });
    },
    GetById: function(req,res){
        var projectId = req.params.id;
        Project.findById(projectId,(err,project)=>{
            if(err) return res.status(500).send({message:"error interno"});
            if(!project) return res.status(204).send({message:"recurso no encontrado"});

            return res.status(200).send(project);
        });
    },
    Post:function(req,res){
        var project = new Project();
        var param = req.body;

        project.name = param.name;
        project.description =  param.description;
        project.category = param.category;
        project.year = param.year;
        project.langs = param.langs;
        project.image = null;

        project.save((err,projectSaved)=>{
            if(err) return res.status(500).send({message:"error interno"});
            if(!projectSaved) return res.status(404).send({message:"recurso no encontrado"});

            return res.status(201).send(projectSaved);
        });
    },
    Put:function(req,res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdate)=>{
            if(err) return res.status(500).send({message:"error interno"});
            if(!projectStored) return res.status(204).send({message:"recurso no encontrado"});


            return res.status(200).send(projectUpdate);
        });
    },
    Delete:function(req,res){
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId,(err,projectStored)=>{
            if(err) return res.status(500).send({message:"error interno"});
            if(!projectStored) return res.status(204).send({message:"recurso no encontrado"});

            return res.status(200).send({projectStored});
        });
    },
    UploadImage:function(req,res){
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' || fileExt=='gif'){

                Project.findByIdAndUpdate(projectId,{image:fileName},{new:true},(err,projectUpdate)=>{
                    if(err) return res.status(500).send({message:"error interno"});
                    if(!projectUpdate) return res.status(204).send({message:"recurso no encontrado"});
                    
                    return res.status(200).send(projectUpdate);
                });
            }
            else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extencion no es valida'});
                });
            }
        }else{
            return res.status(400).send(projectUpdate);
        }
    },
    DownloadImage:function(req,res){
        var file = req.params.id;
        var path_file = './uploads/'+file;

        fs.access(file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }
            else{
                return res.status(204).send({message:'no existe la imagen...'});
            }
        });
    }
};

module.exports = controller;