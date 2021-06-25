import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReportsRoutingModule } from '@modules/reports/reports-routing.module';
import { EditReportComponent } from './components/edit-report/edit-report.component';
import { NewReportComponent } from './components/new-report/new-report.component';
import { ReportsComponent } from './reports.component';

@NgModule({
  declarations: [ReportsComponent, NewReportComponent, EditReportComponent],
  imports: [CommonModule, ReportsRoutingModule, MatButtonModule],
})
export class ReportsModule {}
