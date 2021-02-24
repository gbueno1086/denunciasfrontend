import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoDenunciaRoutingModule } from './tipo-denuncia-routing.module';
import { TipoDenunciaListComponent } from './tipo-denuncia-list/tipo-denuncia-list.component';
import { TipoDenunciaFormComponent } from './tipo-denuncia-form/tipo-denuncia-form.component';
import { TipoDenunciaUpdateComponent } from './tipo-denuncia-update/tipo-denuncia-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TipoDenunciaListComponent, TipoDenunciaFormComponent, TipoDenunciaUpdateComponent],
  imports: [
    CommonModule,
    TipoDenunciaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TipoDenunciaModule { }
