'use strict'
window.addEventListener('load',()=>{
    document.querySelector('#addpelicula').focus();
})

document.querySelector("#formpeliculas").addEventListener('submit',()=>{
    var pelicula = document.querySelector('#addpelicula').value;
    localStorage.setItem(pelicula,pelicula);
});