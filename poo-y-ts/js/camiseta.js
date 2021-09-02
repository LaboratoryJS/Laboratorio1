//inteface
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decoradores
function Estampar(logo) {
    return function (target) {
        target.prototype.Estampacion = function () {
            console.log("Camiseta estampada con el logo " + logo);
        };
    };
}
//clase
let Camiseta = class Camiseta {
    //constructor
    constructor(color, modelo, marca, talla, precio) {
        this.Color = color;
        this.Modelo = modelo;
        this.Marca = marca;
        this.Talla = talla;
        this.Precio = precio;
    }
    //metodos
    get Color() {
        return this._color;
    }
    set Color(value) {
        this._color = value;
    }
    get Marca() {
        return this._marca;
    }
    set Marca(value) {
        this._marca = value;
    }
    get Talla() {
        return this._talla;
    }
    set Talla(value) {
        this._talla = value;
    }
    get Modelo() {
        return this._modelo;
    }
    set Modelo(value) {
        this._modelo = value;
    }
    get Precio() {
        return this._precio;
    }
    set Precio(value) {
        this._precio = value;
    }
};
Camiseta = __decorate([
    Estampar('guchi')
], Camiseta);
class Sudadera extends Camiseta {
    //metodos
    get Capucha() {
        return this._capucha;
    }
    set Capucha(value) {
        this._capucha = value;
    }
}
var sudadera = new Sudadera("qeeqe", "qeqeq", "qeqweqwe", "eqweq", 34);
console.log(sudadera);
sudadera.Capucha = false;
console.log(sudadera);
var camisa = new Camiseta("qeeqe", "qeqeq", "qeqweqwe", "eqweq", 34);
console.log(camisa);
