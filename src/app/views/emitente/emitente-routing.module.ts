import { EmitenteFormComponent } from './emitente-form/emitente-form.component';
import { EmitenteComponent } from './emitente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'emitente', component: EmitenteComponent},
  {path:'emitente-form', component: EmitenteFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmitenteRoutingModule { }
