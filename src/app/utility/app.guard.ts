import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakService } from './keycloak.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private keycloakService: KeycloakService) {
  }
  isAuthenticated(): boolean {
    try {
      this.keycloakService.isTokenExpire();
      return true;
    } catch (e) {
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.isAuthenticated()) {
      return  true;
    }

    this.keycloakService.login();

    return false;

  }
}
