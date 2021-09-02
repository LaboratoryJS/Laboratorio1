import { Component } from "@angular/core";

@Component({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html'
})
export class ZapatillasComponent{
    public Titulo:string;
    
    /**
     *
     */
    constructor() {
        this.Titulo = "ZAPATILLAS AL POR MAYOR";
    }
}