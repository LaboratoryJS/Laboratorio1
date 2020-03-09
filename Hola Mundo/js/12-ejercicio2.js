'use strict'
/**
 * Utilizando un buvle, mostrar la suma y la media de los numeros introducidos
 * hasta introducir un numero negativo y ahi mostrar el resultado
 */
 var suma = 0;
 var contador = 0;
 do{
     var numero = parseInt(prompt('Intruduce numero',0));
     if(isNaN(numero)){
        numero = 0;
     }
     if(numero >=0){
        suma = suma + numero;
        contador++;
     }
 }while(numero > 0);
alert("La suma de todos los numeros es "+suma);
alert("La media es "+(suma/contador));