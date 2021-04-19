import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  crearCuenta:boolean = false;
  consignar:boolean = false;
  retirar:boolean = false;
  consultar:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activarModulo(modulo:string) {
    console.log(modulo)
    switch(modulo) {
      case 'crear':
        this.crearCuenta = true;
        this.consignar = false;
        this.retirar = false;
        this.consultar = false;
        break;
      
      case 'consignar':
        this.consignar = true;
        this.crearCuenta = false;
        this.retirar = false;
        this.consultar = false;
        break;

      case 'retirar':
        this.retirar = true;
        this.consultar = false;
        this.consignar = false;
        this.crearCuenta = false;
        break;

      case 'consultar':
        this.retirar = false;
        this.consultar = true;
        this.consignar = false;
        this.crearCuenta = false;
        break;
      
      default:
        // code block
    }
  }

}
