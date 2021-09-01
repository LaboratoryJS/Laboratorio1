'use strict'

// JSON

var pelicula = {
    titulo:'Batman vs SupermAn',
    year:2017,
    pais: 'Estados Unidos'
};
var peliculas = [
    {titulo:"la verdad duele",year:2017,pais:"estados unidos"},
    {titulo:"Perico Ripiao",year:2000,pais:"Republica Dominicana"},
    pelicula
];
var caja_peliculas = document.querySelector("#peliculas");
for(var index in peliculas){
    var p = document.createElement("p");
    p.append(`${peliculas[index].titulo}-${peliculas[index].year}`)
    caja_peliculas.append(p);
}