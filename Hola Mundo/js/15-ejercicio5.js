'use strict'

/**
 * hacer un programa que muestre todos los numeros divisores de un numero introducido en promt
 */

var numero = parseInt(prompt('Numero',0));
var n = numero-1;
 do{
     if(numero%n==0){
         console.log(n);
     }
     n--;
 }while(n>0);