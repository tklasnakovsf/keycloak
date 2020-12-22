import { Injectable } from '@angular/core';

declare const keyclLogin: any;
declare const keyclLogout: any;
declare const tokenExpire: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  logout(): void {
    keyclLogout();
  }

  login(): void {
    keyclLogin();
  }

  isTokenExpire(): boolean {
    return !tokenExpire();
  }
}
