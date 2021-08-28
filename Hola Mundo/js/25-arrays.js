'use strict'

var nombre = "Ariel";
var nombres = ["Ariel", "ELisa","Gael",25,true];

var lenguajes = new Array("C#","js","Python","RUbi","C#","js","Python","RUbi");

console.log(nombre);
console.log(nombres);
console.log(lenguajes);
//arrays avanzados

document.write("<h1>Lenguajes de Programacion del 2021</h1>");
document.write("<ul>");
// for(var i=0; i<lenguajes.length;i++){
//     document.write(`<li>${lenguajes[i]}</li>`);
// }

//cambiamos por callback forech
lenguajes.forEach((item,index,data)=>
{
    document.write(`<li>${index+1}-${item}</li>`);
    //lo mismo que arriba
    document.write(`<li>${data[index]}</li>`);
});
document.write("</ul>")