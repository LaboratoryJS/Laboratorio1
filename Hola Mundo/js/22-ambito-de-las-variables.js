'use strict'

function holaMundo(texto){
    var dentro = "dentro de la funcion";
    console.log(texto);
    console.log(numero);
    console.log(dentro);
}

 //var hace que la variable de declare global
var texto = "Hola mundo";
var numero = 12;
holaMundo(texto);

// console.log(dentro); no se puede porque dentro esta en el contexto de la funcion hola mundo
