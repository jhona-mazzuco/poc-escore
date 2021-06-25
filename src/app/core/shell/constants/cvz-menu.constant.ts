import { Menu } from '../interfaces/menu.interface';

export const cvzMenu: Menu[] = [
  {
    url: '/mapas-precipitacao',
    icon: 'map',
    name: 'Mapas de Precipitação',
  },
  {
    url: '/gerador-mapas-precipitacao',
    icon: 'history_edu',
    name: 'Gerador Mapas de Precipitação',
  },
  {
    name: 'Indices Meteorológicos',
    icon: 'bar_chart',
    children: [
      {
        url: '/indices-meteorologicos/AAO',
        name: 'AAO',
      },
      {
        url: '/indices-meteorologicos/MJO',
        name: 'MJO',
      },
    ],
  },
  {
    url: '/ena-diaria',
    icon: 'insights',
    name: 'ENA Diária',
  },
  {
    url: '/correlacao-previsto-observado',
    icon: 'visibility',
    name: 'Previsto Observado',
  },
  {
    url: '/tabela-comparativa-precipitacao',
    icon: 'legend_toggle',
    name: 'Tabela Comparativa de Precipitação',
  },
  {
    url: '/rodada_automatica',
    icon: 'restart_alt',
    name: 'Rodada Automático',
  },
  {
    url: '/ipdo',
    icon: 'quickreply',
    name: 'IPDO',
  },
];
