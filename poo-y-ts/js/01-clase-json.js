var bicicleta ={
    color:'rojo',
    modelo:'bmx',
    frenos:'abc',
    velocidadMaxima:'60km/h',

    cambiaColor:function(newColor){
        this.color = newColor
    }
};

console.log(bicicleta);

bicicleta.color = "azul";
bicicleta.cambiaColor("azul");