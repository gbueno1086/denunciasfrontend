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
        url:'/usuario/usuario-form',
      } ,
      {
        name: 'Imóveis',
        url:'/usuario/usuario-form',
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
        url: '/usuario/usuario-form',
      },
     
    ]
  }
];
