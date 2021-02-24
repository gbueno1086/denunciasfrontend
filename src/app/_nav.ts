import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Principal',
    url: '/dashboard',
    icon: 'icon-home',
  },
  {
    name: 'Cadastros',
    url: '/base',
    icon: 'icon-doc',
    children: [
      {
        name: 'Tipo Denuncia',
        url:'/tipo-denuncia/tipo-denuncia-list',
      } ,
      {
        name: 'Imóveis',
        url:'/imovel/imovel-form',
      } ,
      {
        name: 'Status da Denuncia',
        url:'/status-denuncia/status-denuncia',
      },
      {
        name: 'Lançar Denuncia',
        url:'/denuncia/denuncia-list',
      } 
        ]
      },
     {
    name: 'Parametrização',
    url: '/buttons',
    icon: 'icon-settings',
    children: [
      {
        name: 'Emitente',
        url: '/emitente/emitente',
      },
      {
        name: 'Usuarios',
        url: '/usuario/usuario-listar',
      },
     
    ]
  }
];
