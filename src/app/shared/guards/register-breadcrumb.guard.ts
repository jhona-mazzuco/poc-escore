import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShellComponent } from '../../core/shell/shell.component';
import { register, resetAndRegister } from '../rx/actions/breadcrumb.actions';
import { RegisterBreadcrumb } from '../rx/class/register-breadcrumb.class';
import { BreadcrumbItem } from '../rx/interfaces/breadcrumb-register-props.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterBreadcrumbGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (route.url?.length > 0) {
      this.store.dispatch(
        register({
          data: [
            ...this.getAllData(route.parent as ActivatedRouteSnapshot),
            new RegisterBreadcrumb(route.data.name, state.url),
          ],
        })
      );

      return true;
    }

    this.store.dispatch(resetAndRegister({ breadcrumb: new RegisterBreadcrumb(route.data.name, state.url) }));
    return true;
  }

  getAllData(route: ActivatedRouteSnapshot): BreadcrumbItem[] {
    let breadcrumbs = [];
    if (this.hasParent(route.parent)) {
      breadcrumbs.push(...this.getAllData(route));
    }

    return [...breadcrumbs, new RegisterBreadcrumb(route.routeConfig?.data?.name, `/${route.routeConfig?.path}`)];
  }

  hasParent(route: ActivatedRouteSnapshot | null): boolean {
    return !!route?.parent && route.parent.component instanceof ShellComponent;
  }
}
