'use strict'

/**
 * realizar un programa que muestre todos los numeros que hay entre dos numeros
 * introducidos por el Usuarios.
 */

 var numero1 = parseInt(prompt('Primer numero: ',0));
 var numero2 = parseInt(prompt('Segungo numero: ',0));

 for(let i=numero1+1; i<numero2; i++){
     console.log(i);
 }