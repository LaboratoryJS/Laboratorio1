'use strict'

window.addEventListener('load',()=>{
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener("submit",()=>{
        
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        if(nombre.trim() === '' || nombre.trim().lenght==0){
            document.querySelector("#error_nombre").innerHTML = "NOMBRE NO VALIDO";
        }
        else{
            document.querySelector("#error_nombre").innerHTML = "";
        }

        if(apellido.trim() === '' || apellido.trim().lenght==0){
            document.querySelector("#error_apellido").innerHTML = "APELLIDO NO VALIDO";
        }
        else{
            document.querySelector("#error_apellido").innerHTML = "";
        }

        if(isNaN(edad) || edad==0){
            document.querySelector("#error_edad").innerHTML = "EDAD NO VALIDA";
        }
        else{
            document.querySelector("#error_edad").innerHTML = "";
        }

        if(nombre==='' || apellido === '' || edad==0)
        {
            return false;
        }

        var datos = [nombre,apellido,edad];
        for(var index in datos){
            var parrafo = document.createElement("p");
            parrafo.append(datos[index]);
            box_dashed.append(parrafo);
        }

        box_dashed.style.display = "block";
    })
});