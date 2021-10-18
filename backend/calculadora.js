'use strict'

var param = process.argv.slice(2);
var numero1 = parseFloat(param[0]);
var numero2 = parseFloat(param[1]);

var suma = `La suma de los dos numeros es ${numero1+numero2}`

console.log(suma);