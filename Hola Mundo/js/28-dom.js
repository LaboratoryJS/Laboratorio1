'use strict'

//DOM - Document Object Model
function cambiaColor(color){
    caja.style.background = color;
}

var caja = document.getElementById("micaja");

caja.innerHTML = "YA NO SOY UNA CAJA";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
console.log(caja);