import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DashboardRoutingModule } from '@modules/dashboard/dashboard-routing.module';
import { AgentsDataWidgetComponent } from './components/agents-data-widget/agents-data-widget.component';
import { SimpleWidgetComponent } from './components/simple-widget/simple-widget.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, SimpleWidgetComponent, AgentsDataWidgetComponent],
  imports: [CommonModule, DashboardRoutingModule, MatIconModule],
})
export class DashboardModule {}
