import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ContactoUsuario } from '../Models/ContactoUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario:ContactoUsuario;
  constructor() {
    this.usuario = new ContactoUsuario('','','','');
  }

  ngOnInit(): void {
  }

  OnSubmit(form:any):void{
    console.log(this.usuario);
    form.reset();
  }

}
