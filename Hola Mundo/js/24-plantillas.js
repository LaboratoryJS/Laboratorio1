'use strict'

//plantilla de texto

var nombre = prompt("Mete tu nombre");
var apellido = prompt("Mete tus apellidos");

var texto = "Mi nombre es: "+ nombre +"<br/> Y mis apellidos son: "+apellido;


var texto2 = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>y mis apellidos son: ${apellido}</h3>

`

document.write(texto+texto2);