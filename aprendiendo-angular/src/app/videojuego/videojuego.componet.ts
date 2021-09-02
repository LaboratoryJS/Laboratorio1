import { Component } from "@angular/core";

@Component({
    selector:'videojuego',
    templateUrl:'./videojuego.component.html'
})
export class VideoJuegoComponent{
    public Titulo:string;
    public Listado:string;

    constructor(){
        this.Titulo = "Video Juegos del FUTUROOOOOO!!!!!!";
        this.Listado = "Listado de los juegos mas esperados para el 2022";
        console.log("se ha cargado el nuevo componente");
      }
}