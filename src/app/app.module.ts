import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieModule } from './movie/movie.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MovieModule,
    HttpClientModule,
    MaterialModule,
    AuthModule.forRoot({
      domain: environment.oAuth.domain,
      clientId:environment.oAuth.clientId
    }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
