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
import { FormularioRetirarComponent } from './pages/cuenta/formulario-retirar/formulario-retirar.component';
import { FormularioConsultarComponent } from './pages/cuenta/formulario-consultar/formulario-consultar.component';


@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    FormularioCuentaComponent,
    FormularioConsignarComponent,
    FormularioRetirarComponent,
    FormularioConsultarComponent,
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