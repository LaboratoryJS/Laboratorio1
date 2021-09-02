import { Component } from "@angular/core";
import { configuracion } from "../Models/configuracion";

@Component({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html'
})
export class ZapatillasComponent{
    public Titulo:string;
    public Description:string;
    public config;
    
    /**
     *
     */
    constructor() {
        this.Titulo = configuracion.titulo;
        this.Description = configuracion.descripcion;
        this.config = configuracion;
    }
}