import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { VideoJuegoComponent } from './videojuego/videojuego.componet';
import { ExternoComponent } from './externo/externo.component';

const routes: Routes = [
  {path:'zapatillas',component:ZapatillasComponent},
  {path:'zapatillas/:nombre',component:ZapatillasComponent},
  {path:'cursos',component:CursosComponent},
  {path:'cursos/:nombre',component:CursosComponent},
  {path:'juegos',component:VideoJuegoComponent},
  {path:'externo',component:ExternoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
