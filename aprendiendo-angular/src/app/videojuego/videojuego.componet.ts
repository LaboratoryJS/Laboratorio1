import { Component, OnInit,DoCheck,OnDestroy } from "@angular/core";

@Component({
    selector:'videojuego',
    templateUrl:'./videojuego.component.html'
})
export class VideoJuegoComponent implements OnInit,DoCheck,OnDestroy{
    public Titulo:string;
    public Listado:string;

    constructor(){
        this.Titulo = "Video Juegos del FUTUROOOOOO!!!!!!";
        this.Listado = "Listado de los juegos mas esperados para el 2022";
        console.log("se ha cargado el nuevo componente");
      }

    ngOnDestroy(): void {
        console.log("Se ha cargado el ngOnDestroy");
    }

    ngDoCheck(): void {
        console.log("Se ha cargado el DoCheck");
    }

    ngOnInit(): void {
        console.log("Se ha cargado el OnInit");
    }

    CambiarTitulo(){
        this.Titulo = "Nuevo Titulo";
    }
}