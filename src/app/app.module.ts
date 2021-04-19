import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { FormularioCuentaComponent } from './pages/cuenta/formulario-cuenta/formulario-cuenta.component';
import { FormularioConsignarComponent } from './pages/cuenta/formulario-consignar/formulario-consignar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    FormularioCuentaComponent,
    FormularioConsignarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }