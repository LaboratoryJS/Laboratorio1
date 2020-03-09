'use strict'

/**
 * programa que pida 2 numero y que nos diga cual es el mayor el mejor y si son iguales.
 */

 var numero1 = parseInt(prompt('Intruduce el primer numero',0));
 var numero2 = parseInt(prompt('Introduce el segundo numero',0));

 if(numero1 == numero2){
     console.log("Los numeros son iguales")
 } else
 if(numero2>numero1){
     console.log(numero2 + " es mayor que "+numero1);
 }
