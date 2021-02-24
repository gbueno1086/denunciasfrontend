import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { CommonModule } from '@angular/common';
import { EmitenteComponent } from './../emitente/emitente.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'usuario-form', component: UsuarioFormComponent},
  {path:'usuario-perfil', component: UsuarioPerfilComponent},
  {path:'usuario-listar', component: UsuarioListarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
