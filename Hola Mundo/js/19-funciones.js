'use strict'

//funciones
function calculadora(numero1, numero2, monstrar=false){
    if(monstrar == false){
        console.log(`suma: ${numero1}+${numero2}=${numero1+numero2}`);
    }
    else{
        document.write(`suma: ${numero1}+${numero2}=${numero1+numero2}`);
    }
}
calculadora(10,85,true);