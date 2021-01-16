import { ContribuinteComponent } from './contribuinte/contribuinte.component';
import { BairroComponent } from './bairro/bairro.component';
import { LogradouroComponent } from './logradouro/logradouro.component';
import { CidadeComponent } from './cidade/cidade.component';
import { UfComponent } from './uf/uf.component';
import { PaisComponent } from './pais/pais.component';
import { ImovelComponent } from './imovel/imovel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { EmitenteComponent } from './emitente/emitente.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'emitente'
      },
      {
        path: 'emitente',
        component: EmitenteComponent,
        data: {
          title: 'Emitente'
        }
      },
      {
        path: 'imovel',
        component: ImovelComponent,
        data: {
          title: 'Imovel'
        }
      },
      {
        path: 'pais',
        component: PaisComponent,
        data: {
          title: 'Pais'
        }
      },
      {
        path: 'uf',
        component: UfComponent,
        data: {
          title: 'Unidade Federativa'
        }
      },
      {
        path: 'cidade',
        component: CidadeComponent,
        data: {
          title: 'Cidades'
        }
      },
      {
        path: 'logradouro',
        component: LogradouroComponent,
        data: {
          title: 'Logradouros'
        }
      },
      {
        path: 'bairro',
        component: BairroComponent,
        data: {
          title: 'Bairros'
        }
      },
      {
        path: 'contribuinte',
        component: ContribuinteComponent,
        data: {
          title: 'Contribuintes'
        }
      },
      {
        path: 'forms',
        component: PopoversComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
