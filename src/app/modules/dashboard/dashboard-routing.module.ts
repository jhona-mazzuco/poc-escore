import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterBreadcrumbGuard } from '../../shared/guards/register-breadcrumb.guard';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        canActivate: [RegisterBreadcrumbGuard],
        data: {
          name: 'Dashboard',
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
