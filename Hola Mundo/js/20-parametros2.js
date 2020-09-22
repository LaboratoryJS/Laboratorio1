'use strict'

//paremetros rest y spread

//parametros de tipo rest(...nombre)
function listadoFrutas(fruta1, fruta2,...resto_de_frutas){
    console.log(`fruta1: ${fruta1}`);
    console.log(`fruta2: ${fruta2}`);
    console.log(`Frutas: ${resto_de_frutas}`);
}
listadoFrutas("naranja","sandia","coco", "pera","uvas");

//parametros de tipo spread
var frutas = ["naranja","sandia"]
listadoFrutas(...frutas,"coco", "pera","uvas");