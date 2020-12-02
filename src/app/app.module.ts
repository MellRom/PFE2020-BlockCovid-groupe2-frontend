import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ConnexionComponent } from './components/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule,
    RouterModule.forRoot([
      { path: 'hello', component: HelloComponent},
      { path: 'connexion', component: ConnexionComponent}
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
