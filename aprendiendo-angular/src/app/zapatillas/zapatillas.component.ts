import { Component,OnInit } from "@angular/core";
import { configuracion } from "../Models/configuracion";
import { Zapatilla } from "../Models/zapatilla";

@Component({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public Titulo:string = "Componente Zapatillas";
    public Zapatillas:Array<Zapatilla>;
    public marcas:Array<string>;
    public miMarca:string='';
    /**
     *
     */
    constructor() {
        this.marcas = new Array();
        this.Zapatillas = [
            new Zapatilla('Rebook air','rebook','Azul',800,true),
            new Zapatilla('Nike air','Nike','Griz',1500,true),
            new Zapatilla('Jordan air','Jordan','Azul',1000,false),
            new Zapatilla('Adidas air','Adidas','Negras',700,false),
            new Zapatilla('Sd air','rebook','Sd',1000,true),
            new Zapatilla('Amazon air','rebook','Amazon',800,true)
        ];
    }
    ngOnInit(): void {
        this.GetMarcas();
    }
    GetMarcas(){
        this.Zapatillas.forEach((value,index)=>{
            this.marcas.push(value.Marca);
        });
    }

    enterprecionado(){
        document.querySelector("#parrafo");
        console.log(this.miMarca);
    }
}