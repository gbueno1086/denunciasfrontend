import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'emitente',
        loadChildren: () => import('./views/emitente/emitente.module').then(m => m.EmitenteModule)
      },
      {
        path: 'denuncia',
        loadChildren: () => import('./views/denuncia/denuncia.module').then(m => m.DenunciaModule)
      },
      {
        path: 'status-denuncia',
        loadChildren: () => import('./views/status-denuncia/status-denuncia.module').then(m => m.StatusDenunciaModule)
      },
      {
        path: 'tipo-denuncia',
        loadChildren: () => import('./views/tipo-denuncia/tipo-denuncia.module').then(m => m.TipoDenunciaModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./views/usuario/usuario.module').then(m => m.UsuarioModule)
      },
      {
        path: 'imovel',
        loadChildren: () => import('./views/imovel/imovel.module').then(m => m.ImovelModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
