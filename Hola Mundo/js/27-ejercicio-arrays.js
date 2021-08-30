'use strict'
/* 
    1. hacer un programa que pida 6 numeros por pantalla y guardarlo en un array
    2. monstrar el array entero(todos sus elementos) en el cuerpo y en la consola
    3. ordenar el array y mostrarlo ordenado.
    4. invertir el order y mostrarlo.
    5. mostrar cuantos elementos tiene el array
    6. hacer una busqueda de un valor introducido por el usuario, y que nos diga si esta en el array
        su indice.
*/
function MonstrarArrays(elementos,textoCustom){
    document.write(`<h1>${textoCustom}</h1>`);
    document.write("<ul>");
    elementos.forEach((items)=>document.write(`<li>${items}</li>`));
    document.write("</ul>");
}


//llenar el array
var cadena = new Array(6);
for(let i=0;i<6;i++){
    cadena[i] = parseInt(prompt("Introdusca 6 valores"));
}

//mostrarlo
document.write("<h1>ARRAYS List</h1>");
document.write("<ul>");
cadena.forEach((items)=>document.write(`<li>${items}</li>`));
document.write("</ul>");
console.log(cadena);

//ordenarlos y mostrarlos
MonstrarArrays(cadena.sort(),"ARRAY ORDENADO");

//invertirlos y mostrarlos
MonstrarArrays(cadena.reverse(), "ARRAY INVERTIDO")

//mostrar cuantos elementos tiene el array
document.write(`<p>Total de elementos en el array ${cadena.length}</p>`);

let busqueda = parseInt(prompt("Que valor desea buscar? "));
if(cadena.some(valor=>valor==busqueda)){
    document.write(`<p>EL valor buscado fue ${busqueda} y se encuentra en el indice ${cadena.findIndex(valor=>valor==busqueda)}</p>`);
}else{
    alert("El Valor no esta");
}