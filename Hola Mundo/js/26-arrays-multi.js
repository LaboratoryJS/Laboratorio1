'use strict'

var categoria = ["Accion","Terror","Comedia"];
var peliculas = ["la verdad duele","la vida es bella","Gran Torino"];

var cine = [categoria,peliculas];

peliculas.push("Batman");

document.write(`<ul>`);
cine.forEach(items => {
    document.write(`<li>${items}</li>`);
});
document.write(`</ul>`);

var peliculas_string = peliculas.join("|");
var cadena = "texto1,texto2,texto3";

console.log(peliculas_string);
console.log(cadena.split(','));

console.log(peliculas.sort());
console.log(peliculas.reverse());

//busqueda
var precios = [25,30,35,40,45,50,55,69,15,616,651,2021];
var result = peliculas.find(function(peliculas)
{
    return peliculas=="la verdad duele";
});

var result2 = peliculas.find(peliculas =>peliculas=="la verdad duele");

console.log(result2);

var busqueda = precios.some(precio=>precio>=45);
console.log(busqueda);