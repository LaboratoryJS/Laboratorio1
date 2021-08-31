'use strict'

//DOM - Document Object Model
function cambiaColor(color){
    caja.style.background = color;
}

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "YA NO SOY UNA CAJA";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
console.log(caja);

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

todosLosDivs[2].innerHTML = "Era el div 2";
todosLosDivs[2].style.background = "green";
todosLosDivs[2].style.padding = "20px";
todosLosDivs[2].style.color = "white";

for(var valor in todosLosDivs)
{
    var parrafo= document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
}

var divsRojos = document.getElementsByClassName("rojo");
for(let valor in divsRojos){
    if(divsRojos[valor].className=='rojo'){
        divsRojos[valor].style.background = "red";
    }
}
console.log(divsRojos);