import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditReportComponent } from '@modules/reports/components/edit-report/edit-report.component';
import { NewReportComponent } from '@modules/reports/components/new-report/new-report.component';
import { ReportsComponent } from '@modules/reports/reports.component';
import { RegisterBreadcrumbGuard } from '../../shared/guards/register-breadcrumb.guard';
import { ShellRoute } from '../../shared/interfaces/shell-routes.interface';

const routes: ShellRoute[] = [
  {
    path: '',
    component: ReportsComponent,
    canActivate: [RegisterBreadcrumbGuard],
    data: {
      name: 'Relatórios',
    },
  },
  {
    path: 'new',
    component: NewReportComponent,
    canActivate: [RegisterBreadcrumbGuard],
    data: {
      name: 'Novo',
    },
  },
  {
    path: 'edit',
    component: EditReportComponent,
    canActivate: [RegisterBreadcrumbGuard],
    data: {
      name: 'Editar',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
