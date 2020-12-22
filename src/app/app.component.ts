import {KeycloakService} from './utility/keycloak.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private keycloakService: KeycloakService) {}

  logout(): void {
    this.keycloakService.logout();
  }
}
