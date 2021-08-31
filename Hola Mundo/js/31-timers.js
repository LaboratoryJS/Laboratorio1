'use strict'

window.addEventListener('load',()=>{
    var boton = document.querySelector("#boton");
    function CambiarColor(){
        var bg = boton.style.background;
        if(bg == 'rgb(0, 255, 10)'){
            boton.style.background='rgb(255 0 0)';
            boton.style.color="white";
            boton.style.padding="15px";
            boton.style.border ="5px solid rgb(0 255 10)";
        }else{
            boton.style.background='rgb(0 255 10)';
            boton.style.color="black";
            boton.style.padding="30px";
            boton.style.border ="10px solid rgb(255 0 0)";
        }
    }
    var tiempo = setInterval(function(){
        CambiarColor();
    },3000);
});