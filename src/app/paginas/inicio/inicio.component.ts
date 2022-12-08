import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {PuenteService} from './../../servicios/puente.service';

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

  public correo : string = '';
  public clave : string = '';

  public ip1 : number = 0;
  public ip2 : number = 0;
  public ip3 : number = 0;
  public ip4 : number = 0;

  public cambiaCorreo(event : Event) : void{
    this.correo = (event.target as HTMLInputElement).value;
    this.fecha = Date.now();
  }
  public cambiaClave(event : Event) : void{
    this.clave = (event.target as HTMLInputElement).value;
  }

  public cambiaIp1(event : Event) : void{
    const a1 = Number((event.target as HTMLInputElement).value);
    if(isNaN(a1)){
      this.ip1 = 0;
    }
    else{
      this.ip1 = a1;
    }
  }

  public cambiaIp2(event : Event) : void{
    const a1 = Number((event.target as HTMLInputElement).value);
    if(isNaN(a1)){
      this.ip2 = 0;
    }
    else{
      this.ip2 = a1;
    }
  }

  public cambiaIp3(event : Event) : void{
    const a1 = Number((event.target as HTMLInputElement).value);
    if(isNaN(a1)){
      this.ip3 = 0;
    }
    else{
      this.ip3 = a1;
    }
  }

  public cambiaIp4(event : Event) : void{
    const a1 = Number((event.target as HTMLInputElement).value);
    if(isNaN(a1)){
      this.ip4 = 0;
    }
    else{
      this.ip4 = a1;
    }
  }

  public enviarDatos() : void{
    this.datos.buscarDocente(this.correo, this.clave, this.ip1, this.ip2, this.ip3, this.ip4, this.fecha);
  }
}
