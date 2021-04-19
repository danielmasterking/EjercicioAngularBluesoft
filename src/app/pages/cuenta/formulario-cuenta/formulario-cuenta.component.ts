import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CuentaService } from '../../../servicios/cuenta.service';

@Component({
  selector: 'app-formulario-cuenta',
  templateUrl: './formulario-cuenta.component.html',
  styleUrls: ['./formulario-cuenta.component.css']
})
export class FormularioCuentaComponent implements OnInit {
  formulario = new FormGroup({
    nombre: new FormControl(''),
    saldo: new FormControl('')
  });

  tipoMensaje:string;
  notificacion:boolean = false;
  mensaje:string;
  disabled:boolean = false;
  constructor(
    public cuentaService:CuentaService
  ) { }

  ngOnInit(): void {
  }


  submit(){
    if(this.formulario.value.nombre == '' ||  this.formulario.value.nombre == undefined){
      this.notificacionMensaje(
        'danger',
        'El nombre es obligatorio'
      );
    }else if(this.formulario.value.saldo == '' ||  this.formulario.value.saldo == undefined){
      this.notificacionMensaje(
        'danger',
        'El saldo es obligatorio'
      );
    }else{
      console.log(this.formulario.value);
      this.disabled = true;
      let data = this.formulario.value;

      this.cuentaService.crearCuenta(
        data
      ).subscribe(response => {
        console.log(response)
        if(response['code'] == 200){
          this.notificacionMensaje(
            'success',
            'Su cuenta de ahorros fue creada correctamente , este es su numero de cuenta unico ' + response['numeroCuenta']
          );
          this.formulario.reset();
          this.disabled = false;
        }else {
          this.notificacionMensaje(
            'success',
            'Ocurrio un error al momento de crear la cuenta'
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
}
