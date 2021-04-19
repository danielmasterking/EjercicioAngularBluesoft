import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private _baseUrl = `${environment.protocol}://${environment.ApiUrl}/api/`;

  constructor(private http: HttpClient) { }

  crearCuenta(datos:object) {
    return this.http.post(this._baseUrl + 'crear_cuenta', datos);
  }

  consignar(datos:object) {
    return this.http.post(this._baseUrl + 'consignar', datos);
  }
}
