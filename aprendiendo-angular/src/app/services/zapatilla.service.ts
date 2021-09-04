import { Injectable } from "@angular/core";

import { Zapatilla } from "../Models/zapatilla";

@Injectable()
export class ZapatillaService{
  public Zapatillas:Array<Zapatilla>;

  constructor() {
    this.Zapatillas = [
      new Zapatilla('Rebook air','rebook','Azul',1000,true),
      new Zapatilla('Nike air','aull','Griz',800,true),
      new Zapatilla('Jordan air','nike','Azul',800,false),
      new Zapatilla('Adidas air','Adidas','Negras',1100,true),
      new Zapatilla('Sd air','rebook','Sd',800,true),
      new Zapatilla('Sd air','rebook','Sd',800,true),
      new Zapatilla('Sd air','rebook','Sd',800,true),
      new Zapatilla('Amazon air','Nike','Amazon',1500,true)
  ];
  }

  getZapatillas():Array<Zapatilla>{
    return this.Zapatillas;
  }
}
