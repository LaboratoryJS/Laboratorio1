//inteface

interface CamisetaBase{
    SetColor():string;
    GetColor():string;

}
//decoradores
function Estampar(logo:string){
    return function(target:Function){
        target.prototype.Estampacion = function():void{
            console.log("Camiseta estampada con el logo "+logo);
        }
    }
}

//clase
@Estampar('guchi')
class Camiseta{
    
    //propiedades
    private _color:string;
    private _modelo:string;
    private _marca:string;
    private _talla:string;
    private _precio:number;
    
    //constructor
    constructor(color:string,modelo:string,marca:string,talla:string,precio:number){
        this.Color = color;
        this.Modelo =modelo;
        this.Marca = marca;
        this.Talla = talla;
        this.Precio = precio;
    }

    //metodos
    get Color():string{
        return this._color;
    }
    set Color(value:string){
        this._color = value;
    }

    get Marca():string{
        return this._marca;
    }
    set Marca(value:string){
        this._marca = value;
    }

    get Talla():string{
        return this._talla;
    }
    set Talla(value:string){
        this._talla = value;
    }

    get Modelo():string{
        return this._modelo;
    }
    set Modelo(value:string){
        this._modelo = value;
    }

    get Precio():number{
        return this._precio;
    }
    set Precio(value:number){
        this._precio = value;
    }
}

class Sudadera extends Camiseta{

    private _capucha:boolean;

    //metodos
    get Capucha():boolean{
        return this._capucha;
    }
    set Capucha(value:boolean){
        this._capucha = value;
    }
}

var sudadera = new Sudadera("qeeqe","qeqeq","qeqweqwe","eqweq",34);
console.log(sudadera);
sudadera.Capucha=false;
console.log(sudadera);

var camisa:Camiseta = new Camiseta("qeeqe","qeqeq","qeqweqwe","eqweq",34);

console.log(camisa);
