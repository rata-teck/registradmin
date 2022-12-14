//import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {PuenteService} from './../../servicios/puente.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor(
    public datos : PuenteService
  ){}

  public fecha : number = 0;

  private correo : string = '';
  private clave : string = '';

  public c1 = new FormControl('', [Validators.required]);
  public c2 = new FormControl('', Validators.required);

  public enviarDatos() : void{
    this.fecha = Date.now();

    if(this.c1.value === null){
      this.correo = '';
    }
    else{
      this.correo = this.c1.value;
    }

    if(this.c2.value === null){
      this.clave = '';
    }
    else{
      this.clave = this.c2.value;
    }

    this.datos.buscarDocente(this.correo, this.clave,  this.fecha);
  }
}
