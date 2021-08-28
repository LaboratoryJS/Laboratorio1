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
