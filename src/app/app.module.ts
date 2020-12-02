import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { QRCodeModule } from 'angularx-qrcode';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule,
    RouterModule.forRoot([
      { path: 'hello', component: HelloComponent},
      { path: 'login', component: LoginComponent},
      { path: 'inscription', component: InscriptionComponent}

    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
