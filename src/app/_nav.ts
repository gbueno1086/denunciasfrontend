import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-home',
  },
  {
    name: 'Cadastros Basicos',
    url: '/base',
    icon: 'icon-doc',
    children: [
      {
        name: 'Localização',
        url:'',
        icon:'icon-map',
        children:[
          {
            name: 'País',
            url: '/base/pais'
          },
          {
            name: 'Uf',
            url: '/base/uf'
          },
          {
            name: 'Cidades',
            url: '/base/cidade'
          },
          {
            name: 'Bairros',
            url: '/base/bairro'
          },
          {
            name: 'Logradouros',
            url: '/base/logradouro'
          }, 
        ]
      },
     
      {
        name: 'Imoveis',
        url: '/base/imovel'
      },
      {
        name: 'Contribuintes',
        url: '/base/contribuinte'
      
      }
    ]
  },
  {
    name: 'Imobiliario',
    url: '/imobiliario',
    icon: 'icon-crop',
    children: [
      {
        name: 'Fiscaliza Obras',
        url: '/buttons',
        icon: 'icon-settings',
        children: [
          {
            name: 'Projeto/Regularização',
            url: '/buttons/buttons',
          },
          {
            name: 'Habite-se',
            url: '/base/emitente',
          },
          {
            name: 'Conceder Numeração',
            url: '/base/emitente',
          },
        ]
      },
      {
        name: 'Fiscaliza Terrenos',
        url: '/buttons',
        icon: 'icon-settings',
        children: [
          {
            name: 'Terreno Sujo',
            url: '/buttons/buttons',
          },
          {
            name: 'Muro/Calçada',
            url: '/base/emitente',
          }
        ]
      },
      {
        name: 'Obras',
        url:'buttons/buttons'
      },
      {
        name: 'Emitente',
        url: '/base/emitente',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Parametrização',
    url: '/buttons',
    icon: 'icon-settings',
    children: [
      {
        name: 'Emitente',
        url: '/base/emitente',
      },
      {
        name: 'Departamentos',
        url:'/base/emitente',
      },
      {
        name: 'Divisão',
        url:'/base/emitente',
      },
      {
        name: 'Usuarios',
        url: '/buttons/buttons',
      },
     
      {
        name: 'Forms',
        url: '/base/forms',
      },
    ]
  }
];
