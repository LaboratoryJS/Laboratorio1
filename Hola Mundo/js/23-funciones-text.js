'use strict'

//transformacion de textos
var numero =444;
var texto1 = "bienvenido al curso de js";
var texto2 = "CURSO ABURRIDO";

//#region Tema Anterior
// var dato = numero.toString();
//     dato = texto1.toUpperCase();
//     dato = texto2.toLowerCase();
// console.log(dato);

// //calcular longitud
// var nombre = "Ariel Villalona";

// console.log(nombre.length);

// //contatenar
// //var uno = texto1+" "+texto2;
// var uno  = texto1.concat(" ",texto2);
// console.log(uno);
//#endregion

// var busqueda = texto1.indexOf("curso");
// var busqueda = texto1.search("curso");
var busqueda = texto1.match(/curso/g);
console.log(busqueda);