import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenunciaRoutingModule } from './denuncia-routing.module';
import { DenunciaListComponent } from './denuncia-list/denuncia-list.component';
import { DenunciaFormComponent } from './denuncia-form/denuncia-form.component';
import { DenunciaUpdateComponent } from './denuncia-update/denuncia-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DenunciaListComponent, DenunciaFormComponent, DenunciaUpdateComponent],
  imports: [
    CommonModule,
    DenunciaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DenunciaModule { }
