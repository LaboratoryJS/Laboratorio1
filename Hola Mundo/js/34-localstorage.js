'use strict'

//localstorage

if(typeof(Storage)!=='undefined'){
    console.log("Localstorage Disponible")
}

localStorage.setItem("titulo","Custo de js de ariel villalona");

console.log(localStorage.getItem("titulo"));

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

localStorage.setItem("peliculas",JSON.stringify(peliculas));