import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey! ';
  public Mostrar_VideoJuegos:boolean=true;

  OcultarVideoJuegos(value:boolean){
    this.Mostrar_VideoJuegos = value;
  }
}