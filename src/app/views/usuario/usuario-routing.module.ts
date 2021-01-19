import { EmitenteComponent } from './../emitente/emitente.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'usuario-form', component: UsuarioFormComponent},
  {path:'usuario-perfil', component: UsuarioPerfilComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
