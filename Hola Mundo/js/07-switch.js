'use strict'

var edad = 28;
var imprime= "";

switch(edad){
    case 18:
        imprime += "Acabas de cumplir la mayoria de edad";
    break;
    case 28:
        imprime += "Ya eres un adulto";
    break;
    case 40:
        imprime += "crisis de los cuarenta";
    break;
    case 75:
        imprime += "Ya eres un anciano";
    break;
    default:
        imprime += "Eadad no registrada";
}
console.log(imprime);