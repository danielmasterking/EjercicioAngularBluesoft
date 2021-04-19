import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CuentaService } from '../../../servicios/cuenta.service';

@Component({
  selector: 'app-formulario-consignar',
  templateUrl: './formulario-consignar.component.html',
  styleUrls: ['./formulario-consignar.component.css']
})
export class FormularioConsignarComponent implements OnInit {

  formulario = new FormGroup({
    numero_cuenta: new FormControl(''),
    valor_consignar: new FormControl('')
  });

  disabled:boolean = false;
  tipoMensaje:string;
  notificacion:boolean = false;
  mensaje:string;

  constructor(
    public cuentaService:CuentaService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.formulario.value.numero_cuenta == '' ||  this.formulario.value.numero_cuenta == undefined){
      this.notificacionMensaje(
        'danger',
        'El numero de cuenta es obligatorio'
      );
    }else if(this.formulario.value.valor_consignar == '' ||  this.formulario.value.valor_consignar == undefined){
      this.notificacionMensaje(
        'danger',
        'El valor a consignar es obligatorio'
      );
    }else{
      console.log(this.formulario.value);
      this.disabled = true;
      let data = this.formulario.value;

      this.cuentaService.consignar(
        data
      ).subscribe(response => {
        console.log(response)
        if(response['code'] == 200){
          this.notificacionMensaje(
            'success',
            'La cuenta con numero  ' + response['numeroCuenta'] + ' recibio una consignacion exitoda de ' + this.formatNumber(this.formulario.value.valor_consignar) + ' el nuevo saldo de esta cuenta es ' + this.formatNumber(response['nuevoSaldo'])
          );
          this.formulario.reset();
          this.disabled = false;
        }else {
          this.notificacionMensaje(
            'success',
            'Ocurrio un error'
          );
        }
      });
    }
  }

  notificacionMensaje(tipo:string ,mensage:string){
    this.notificacion = true;
    this.tipoMensaje = tipo;
    this.mensaje = mensage;

    setTimeout(this.desactivarNotificacion, 3000);
  }

  desactivarNotificacion() {
    this.notificacion = false
  }

  formatNumber(numero:number) {
    return new Intl.NumberFormat().format(numero);
  }

}
