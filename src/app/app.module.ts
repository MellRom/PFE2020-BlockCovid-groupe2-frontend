import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctor/doctor.component';
import { EstablishmentComponent } from './components/establishment/establishment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'establishment', component: EstablishmentComponent },
  { path: '', component: WelcomeComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    DoctorComponent,
    EstablishmentComponent,
    PageNotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
