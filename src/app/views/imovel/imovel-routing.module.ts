import { ImovelPesquisaComponent } from './imovel-pesquisa/imovel-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';


const routes: Routes = [
  {path:'imovel-form', component: ImovelFormComponent},
  {path:'imovel-pesquisa', component: ImovelPesquisaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImovelRoutingModule { }
