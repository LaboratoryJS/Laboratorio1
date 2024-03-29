import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent} from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'sobre-mi',component:AboutComponent},
  {path:'proyecto',component:ProjectComponent},
  {path:'crear-proyecto',component:CreateComponent},
  {path:'contacto',component:ContactComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
