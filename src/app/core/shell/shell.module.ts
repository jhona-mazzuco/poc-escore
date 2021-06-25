import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent, SidebarComponent, NavbarComponent, BreadcrumbComponent, ConfigurationComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
  ],
})
export class ShellModule {}
