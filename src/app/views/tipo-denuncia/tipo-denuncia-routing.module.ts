import { TipoDenunciaUpdateComponent } from './tipo-denuncia-update/tipo-denuncia-update.component';
import { TipoDenunciaFormComponent } from './tipo-denuncia-form/tipo-denuncia-form.component';
import { TipoDenunciaListComponent } from './tipo-denuncia-list/tipo-denuncia-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'tipo-denuncia-list', component: TipoDenunciaListComponent},
  {path:'tipo-denuncia-form', component: TipoDenunciaFormComponent},
  {path:'tipo-denuncia-update/:id', component: TipoDenunciaUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDenunciaRoutingModule { }
