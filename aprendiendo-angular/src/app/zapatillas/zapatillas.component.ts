import { Component,OnInit } from "@angular/core";
import { configuracion } from "../Models/configuracion";
import { Zapatilla } from "../Models/zapatilla";

import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html',
    providers:[
      ZapatillaService
    ]
})
export class ZapatillasComponent implements OnInit{
    public Titulo:string = "Componente Zapatillas";
    public Zapatillas:Array<Zapatilla>;
    public marcas:Array<string>;
    public miMarca:string='';
    private _zapatillaService:ZapatillaService;
    /**
     *
     */
    constructor(zapatillaService:ZapatillaService) {
      this._zapatillaService = zapatillaService;

      this.Zapatillas = new Array<Zapatilla>();
      this.marcas = new Array();
    }
    ngOnInit(): void {
      this.Zapatillas = this._zapatillaService.getZapatillas();
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
