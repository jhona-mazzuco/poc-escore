import { Route } from '@angular/router';
import { ShellRouteData } from './shell-route-data.interface';

export interface ShellRoute extends Route {
  data?: ShellRouteData;
  children?: ShellRoute[];
}
