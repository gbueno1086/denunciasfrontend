import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImovelRoutingModule } from './imovel-routing.module';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';


@NgModule({
  declarations: [ImovelFormComponent],
  imports: [
    CommonModule,
    ImovelRoutingModule,
  ]
})
export class ImovelModule { }
