'use strict'

/**
 * calculadora que pida dos numeros por pantalla
 * si los numeros estan mal que nos los vuelva a pedir
 * que muestre en el cuerpo de la pagina en una alerta y por la consola el resultado de sumar restar multiplicar y dividir esas dos cifras.
 */

 do{
    var numero1 = parseInt(prompt('Primer numero: ',0));
    var numero2 = parseInt(prompt('Segungo numero: ',0));
 }while(numero1<0 || numero2<0 || isNaN(numero1)||isNaN(numero2));

 var resultado = `La suma es: ${(numero1+numero2)} <br/>` +
                `La resta es: ${numero1-numero2} <br/>` +
                `La multiplicacion es: ${(numero1*numero2)} <br/>`+
                `La divicion es: ${(numero1/numero2)} <br/>`+
                `La divicion2 es: ${(numero2/numero1)} <br/>`;

document.write(resultado);