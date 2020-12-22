import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanActiveComponent } from './can-active/can-active.component';
import { HomeComponent } from './home/home.component';
import {KeycloakService} from './utility/keycloak.service';

@NgModule({
  declarations: [
    AppComponent,
    CanActiveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    KeycloakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
