import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImovelRoutingModule } from './imovel-routing.module';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ImovelPesquisaComponent } from './imovel-pesquisa/imovel-pesquisa.component';


@NgModule({
  declarations: [ImovelFormComponent, ImovelPesquisaComponent],
  imports: [
    CommonModule,
    ImovelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ImovelModule { }
