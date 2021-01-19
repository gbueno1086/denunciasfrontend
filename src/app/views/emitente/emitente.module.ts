import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmitenteRoutingModule } from './emitente-routing.module';
import { EmitenteComponent } from './emitente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmitenteComponent],
  imports: [
    CommonModule,
    EmitenteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmitenteModule { }
