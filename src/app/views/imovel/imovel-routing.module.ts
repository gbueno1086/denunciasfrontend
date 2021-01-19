import { ImovelComponent } from './../base/imovel/imovel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';


const routes: Routes = [
  {path:'imovel-form', component: ImovelFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImovelRoutingModule { }
