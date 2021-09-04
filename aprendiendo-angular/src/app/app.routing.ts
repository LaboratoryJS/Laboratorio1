import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { VideoJuegoComponent } from './videojuego/videojuego.componet';

const routes: Routes = [
  {path:'zapatillas',component:ZapatillasComponent},
  {path:'cursos',component:CursosComponent},
  {path:'juegos',component:VideoJuegoComponent},
];

