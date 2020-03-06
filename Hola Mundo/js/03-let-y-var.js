'use strict'

/*
pruebas con let y var

con var creamos variables globales
con let creamos variables a nivel de bloques

*/
//prueba con var
var numero = 40;
if(true){
    var numero = 50;
    console.log(numero); //valor 50
}
console.log(numero)//valor 50

//prueba con let
var texto = "esto es un var con texto";
console.log(texto)//valor esto es un var con texto
if(true){
    let texto = "CUsto asp.net";
    console.log(texto);//valor curso asp.net
}
console.log(texto);