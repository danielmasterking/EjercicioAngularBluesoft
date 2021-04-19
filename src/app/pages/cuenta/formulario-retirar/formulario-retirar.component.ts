import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CuentaService } from '../../../servicios/cuenta.service';

@Component({
  selector: 'app-formulario-retirar',
  templateUrl: './formulario-retirar.component.html',
  styleUrls: ['./formulario-retirar.component.css']
})
export class FormularioRetirarComponent implements OnInit {
  formulario = new FormGroup({
    numero_cuenta: new FormControl(''),
    valor_retirar: new FormControl('')
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
    }else if(this.formulario.value.valor_retirar == '' ||  this.formulario.value.valor_retirar == undefined){
      this.notificacionMensaje(
        'danger',
        'El valor a retirar es obligatorio'
      );
    }else{
      let confirmar = this.confirmacion('Seguro desea retirar este dinero?');
      if(confirmar){
        console.log(this.formulario.value);
        this.disabled = true;
        let data = this.formulario.value;

        this.cuentaService.retirar(
          this.formulario.value.numero_cuenta,
          this.formulario.value.valor_retirar
        ).subscribe(response => {
          console.log(response)
          if(response['code'] == 200){
            this.notificacionMensaje(
              'success',
              'Retiro exitoso acabas de retirar  $.' + this.formatNumber(this.formulario.value.valor_retirar) + '   el nuevo saldo de la cuenta numero '+ this.formulario.value.numero_cuenta +' es de $.' + this.formatNumber(response['nuevoSaldo'])
            );
            this.formulario.reset();
            this.disabled = false;
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


  confirmacion(mensaje:string){
    let confirmacion = confirm(mensaje);

    return confirmacion;
  }

}
