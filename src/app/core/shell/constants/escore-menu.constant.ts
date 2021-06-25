import { Menu } from '../interfaces/menu.interface';

export const escoreMenu: Menu[] = [
  {
    icon: 'home',
    name: 'Dashboard',
    url: '/',
  },
  {
    icon: 'feed',
    name: 'Mercado',
    children: [
      {
        name: 'Insights',
        url: '',
      },
    ],
  },
  {
    icon: 'edit_note',
    name: 'Cadastros',
    children: [
      {
        name: 'Clientes',
        url: '',
      },
      {
        name: 'Agentes',
        url: '',
      },
      {
        name: 'Perfil de Agente',
        url: '',
      },
      {
        name: 'Ativos',
        url: '',
      },
      {
        name: 'Ponto de Medição',
        url: '',
      },
      {
        name: 'Contraparte',
        url: '',
      },
      {
        name: 'Contatos',
        url: '',
      },
    ],
  },
  {
    icon: 'dvr',
    name: 'Estudos',
    children: [
      {
        name: 'Análise de Viabilidade',
        url: '',
      },
    ],
  },
  {
    icon: 'summarize',
    name: 'Relatórios',
    url: '/reports',
  },
  {
    icon: 'price_check',
    name: 'Faturas de Distribuição',
    url: '/',
  },
  {
    icon: 'build',
    name: 'Regulatório',
    children: [
      {
        name: 'Clipping',
        url: '',
      },
    ],
  },
  {
    icon: 'task',
    name: 'Task Manager',
    url: '',
  },
];
