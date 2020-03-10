'use strict'

/**
 * mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */
var numero1 = parseInt(prompt("Numero 1",0));
var numero2 = parseInt(prompt("numero 2",0));

for(let i = numero1 +1; i<numero2; i++){
    if(i%2!=0){
        console.log(i);
    }
}