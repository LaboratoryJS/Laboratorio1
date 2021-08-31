'use strict'

window.addEventListener('load',()=>{
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener("submit",()=>{
        box_dashed.style.display = "block";
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        if(nombre.trim() === null || nombre.trim().lenght==0){
            alert("no valido");
            return false;
        }
        if(apellido.trim() === null || apellido.trim().lenght==0){
            alert("no valido");
            return false;
        }
        if(isNaN(edad) || edad==0){
            alert("no valido");
            return false;
        }
        var datos = [nombre,apellido,edad];

        for(var index in datos){
            var parrafo = document.createElement("p");
            parrafo.append(datos[index]);
            box_dashed.append(parrafo);
        }
    })
});