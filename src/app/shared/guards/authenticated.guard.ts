import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const isAtheticated = !!localStorage.getItem(environment.TOKEN_LS_KEY);

    if (!isAtheticated) {
      this.router.navigateByUrl('login');
    }

    return isAtheticated;
  }
}
