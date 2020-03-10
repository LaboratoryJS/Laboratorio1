'use strict'

/**
 * tabla de multiplicar de un numero introducido por pantalla
 */

 var numero = parseInt(prompt("tabla numero",0));

 for(let i=1;i<=10;i++){
     document.writeln(`${i}x${numero}=${i * numero}<br/>`);
 }