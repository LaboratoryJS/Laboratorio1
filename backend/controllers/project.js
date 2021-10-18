'use strict'
var Project = require('../models/project');

var controller = {
    home: function(req,res){
        return res.status(200).send({
            message:'Soy la home'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message:'soy la accion test del controllador project'
        });
    },
    getListProyect:function(req,res){

        Project.find((err,projectStored)=>{
            if(err) return res.status(500).send({message:"error interno"});

            if(!projectStored) return res.status(204).send({message:"recurso no encontrado"});

            return res.status(200).send({projectStored});
        });
    },
    getProject: function(req,res){
        var projectId = req.params.id;
        Project.findById(projectId,(err,projectStored)=>{
            if(err) return res.status(500).send({message:"error interno"});

            if(!projectStored) return res.status(204).send({message:"recurso no encontrado"});

            return res.status(200).send({projectStored});
        });
    },
    saveProyect:function(req,res){
        var project = new Project();

        var param = req.body;
        project.name = param.name;
        project.description =  param.description;
        project.category = param.category;
        project.year = param.year;
        project.langs = param.langs;
        project.image = null;

        project.save((err,projectStored)=>{
            if(err) return res.status(500).send({message:"error interno"});

            if(!projectStored) return res.status(404).send({message:"recurso no encontrado"});

            return res.status(201).send({project:projectStored});
        });
    },
    updateProyect:function(req,res){
    }
};

module.exports = controller;