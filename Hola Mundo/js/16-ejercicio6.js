'use strict'
/**
 * hacer un programa que nos diga si un numero es par o impar
 * si no es valido que pida nuevamente el numero
 */

 var number = parseInt(prompt('introduce un numero',0));
 
 while(isNaN(number)){
     number = parseInt(prompt('introduce un numero',0));
 }
 if(number%2==0){
     console.log("Es par");
 }else{
     console.log("Es impar");
 }