import { StatusDenunciaUpdateComponent } from './status-denuncia-update/status-denuncia-update.component';
import { StatusDenunciaFormComponent } from './status-denuncia-form/status-denuncia-form.component';
import { StatusDenunciaComponent } from './status-denuncia/status-denuncia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'status-denuncia', component: StatusDenunciaComponent},
  {path: 'status-denuncia-form', component: StatusDenunciaFormComponent},
  {path: 'status-denuncia-update/:id', component: StatusDenunciaUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusDenunciaRoutingModule { }
