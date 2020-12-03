import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { QRCodeModule } from 'angularx-qrcode';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctor/doctor.component';
import { EstablishmentComponent } from './components/establishment/establishment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddPlaceComponent } from './components/establishment/add-place/add-place.component';

const appRoutes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'establishment', component: EstablishmentComponent },
  { path: 'ajout-lieu', component: AddPlaceComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    InscriptionComponent,
    DoctorComponent,
    EstablishmentComponent,
    PageNotFoundComponent,
    AddPlaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
