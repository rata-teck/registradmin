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

  public c1 = new FormControl('', [Validators.required, Validators.email]);
  public c2 = new FormControl('', Validators.required);

  public a1 = new FormControl(0, [Validators.required, Validators.min(0), Validators.max(255)]);
  public a2 = new FormControl(0, [Validators.required, Validators.min(0), Validators.max(255)]);
  public a3 = new FormControl(0, [Validators.required, Validators.min(0), Validators.max(255)]);
  public a4 = new FormControl(0, [Validators.required, Validators.min(0), Validators.max(255)]);

  private ip1 : number = 0;
  private ip2 : number = 0;
  private ip3 : number = 0;
  private ip4 : number = 0;

  public enviarDatos() : void{
    this.fecha = Date.now();

    if(this.a1.value === null){
      this.ip1 = 0;
    }
    else{
      this.ip1 = this.a1.value;
    }

    if(this.a2.value === null){
      this.ip2 = 0
    }
    else{
      this.ip2 = this.a2.value;
    }

    if(this.a3.value === null){
      this.ip3 = 0;
    }
    else{
      this.ip3 = this.a3.value;
    }

    if(this.a4.value === null){
      this.ip4 = 0;
    }
    else{
      this.ip4 = this.a4.value;
    }

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

    this.datos.buscarDocente(this.correo, this.clave, this.ip1, this.ip2, this.ip3, this.ip4, this.fecha);
  }
}
