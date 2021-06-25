import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellRoute } from '../../shared/interfaces/shell-routes.interface';
import { ShellComponent } from './shell.component';

const routes: ShellRoute[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'reports',
        loadChildren: () => import('@modules/reports/reports.module').then((m) => m.ReportsModule),
        data: {
          name: 'Relatórios',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
