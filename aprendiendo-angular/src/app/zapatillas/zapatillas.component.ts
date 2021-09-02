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
    /**
     *
     */
    constructor() {
        this.Zapatillas = [
            new Zapatilla('Rebook air','rebook','Azul',1000,true),
            new Zapatilla('Nike air','Nike','Griz',1500,true),
            new Zapatilla('Jordan air','Jordan','Azul',1000,false),
            new Zapatilla('Adidas air','Adidas','Negras',1000,true),
            new Zapatilla('Sd air','rebook','Sd',1000,true),
            new Zapatilla('Amazon air','rebook','Amazon',1000,false)
        ];
    }
    ngOnInit(): void {
        
    }
}