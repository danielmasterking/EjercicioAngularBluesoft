import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CuentaService } from '../../../servicios/cuenta.service';

@Component({
  selector: 'app-formulario-consultar',
  templateUrl: './formulario-consultar.component.html',
  styleUrls: ['./formulario-consultar.component.css']
})
export class FormularioConsultarComponent implements OnInit {
  formulario = new FormGroup({
    numero_cuenta: new FormControl('')
  });

  disabled:boolean = false;
  tipoMensaje:string;
  notificacion:boolean = false;
  mensaje:string;
  saldoActual:any;
  verSaldo:boolean = false;
  numeroCuenta:number;

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
    }else{
      
      console.log(this.formulario.value);
      this.disabled = true;
      let data = this.formulario.value;

      this.cuentaService.consultar(
        data.numero_cuenta
      ).subscribe(response => {
        console.log(response)
        if(response['code'] == 200){
          
          this.formulario.reset();
          this.disabled = false;

          this.saldoActual = this.formatNumber(response['saldo']);

          this.verSaldo = true;

          this.numeroCuenta = response['numeroCuenta'];

          if(response['errores'].length == 0){
            this.notificacion = false;
          }

        }else {
          this.formulario.reset();
          this.disabled = false;
          let msjError:string ='';

          response['errores'].forEach(element => {
            msjError += element + ' - ';
          });


          this.notificacionMensaje(
            'danger',
            msjError
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
