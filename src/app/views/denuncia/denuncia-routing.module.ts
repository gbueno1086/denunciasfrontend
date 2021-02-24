import { DenunciaUpdateComponent } from './denuncia-update/denuncia-update.component';
import { DenunciaListComponent } from './denuncia-list/denuncia-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DenunciaFormComponent } from './denuncia-form/denuncia-form.component';


const routes: Routes = [
  {path:'denuncia-list', component: DenunciaListComponent},
  {path:'denuncia-form', component: DenunciaFormComponent},
  {path:'denuncia-update/:id', component:DenunciaUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenunciaRoutingModule { }
