import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusDenunciaRoutingModule } from './status-denuncia-routing.module';
import { StatusDenunciaFormComponent } from './status-denuncia-form/status-denuncia-form.component';
import { StatusDenunciaComponent } from './status-denuncia/status-denuncia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StatusDenunciaUpdateComponent } from './status-denuncia-update/status-denuncia-update.component';


@NgModule({
  declarations: [ StatusDenunciaFormComponent, StatusDenunciaComponent, StatusDenunciaUpdateComponent],
  imports: [
    CommonModule,
    StatusDenunciaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StatusDenunciaModule { }
