'use strict'
var edad = 28;
var user = 'Ariel';

//operadores relacionales
/*
    >  mayor que
    <  menor que
    >= mayor o igual que
    <= menor o igual que
    == igual que
    != diferente de
*/
if(edad>=18){
    //es mayor de edad
    console.log('el usuario '+user+' tiene '+edad+'años, Es mayor de edad');
    //if aninado
    if(edad<=33){
        console.log("Aun eres milenial");
    }else if(edad>=70){
        console.log("eres un anciano")
    }
    else{
        console.log("Ya no eres milenial")
    }
}else{
    console.log('el usuario '+user+' tiene '+edad+'años, Es menor de edad');
}

//operadores logicos
/* 
    AND(Y): &&
    OR(0): ||
    NEGACION: !
*/

//negacion
var year = 2020;
if(year != 2019){
    console.log('el ano no es 2019');
}

//AND
if(year >= 2000 && year <= 2020){
    console.log('estamos en la era actual');
}else{
    console.log('estamos en la era post moderna');
}

//OR
if(year == 1920 || year == 2020){
    console.log('El año termina en 20');
}