'use strict'

//eventos del raton


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
//click
var boton = document.querySelector("#boton");
boton.addEventListener('click',function(){CambiarColor()});

//mouse over
boton.addEventListener('mouseover',function(){
    this.style.background = "#ccc";
});

//mouse out
boton.addEventListener('mouseout',function(){
    this.style.background = "#fff";
});

var input = document.querySelector("#campo_nombre");
//focus
input.addEventListener('focus',function(){
    console.log("focus en input");
});
//blur
input.addEventListener('blur',function(){
    console.log("fuera de el input");
});
//key dowm
input.addEventListener('keydown',function(event){
    console.log("pulsando techa ",String.fromCharCode(event.keyCode));
});
//key press
input.addEventListener('keypress',function(event){
    console.log("tecla presionada",String.fromCharCode(event.keyCode));
});
//key up
input.addEventListener('keyup',function(event){
    console.log("dedo levantado de la tecla",String.fromCharCode(event.keyCode));
});