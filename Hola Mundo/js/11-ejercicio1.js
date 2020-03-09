'use strict'

/**
 * programa que pida 2 numero y que nos diga cual es el mayor el mejor y si son iguales.
 * plus si los numero no son numeros o son menores o igual que cero, nos lo vuelve a pedir
 */

do{
    var numero1 = parseInt(prompt('Intruduce el primer numero',0));
    var numero2 = parseInt(prompt('Introduce el segundo numero',0));
}while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2));

if(numero1 == numero2){
    console.log("Los numeros son iguales")
} else
if(numero2>numero1){
    console.log(numero2 + " es mayor que "+numero1);
}else{
    console.log("Introduce numero correcto");
}