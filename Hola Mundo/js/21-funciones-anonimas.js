'use strict'

//funciones anonimas

// var pelicula = function(nombre){
//     return `La pelicula es: ${nombre}`;
// }

function sumame(numero1, numero2,sumaymuestra,sumapordos){
    var sumar = numero1 + numero2;

    sumaymuestra(52);
    sumapordos(52);
    return sumar;
}

sumame(1,3,(dato)=>{//funcion flecha
    console.log(dato);
},
function(dato){//funciones de callback
    console.log(dato*2);
});