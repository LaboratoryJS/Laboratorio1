'use strict'

//bucle While

var year = 2018;

while(year <= 2051){
    /**Mientras lo de qrriba se cumpla lo ejecutara lo de abajo*/
    console.log("Estamos en el ano: ",year);
    year++;
    if(year==2048){
        break;
    }
}

//do while
var years = 20;
do{
    console.log("Solo cuando sea diferente de 20");
    years++;
}while(years < 25);