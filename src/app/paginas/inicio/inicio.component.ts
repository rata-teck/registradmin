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

  public fecha1 : number  = 0;
  public fecha2 : string =  "";

  public correo : string = '';
  public clave : string = '';

  public ip1 : number = 0;
  public ip2 : number = 0;
  public ip3 : number = 0;
  public ip4 : number = 0;

  public cambiaCorreo(event : Event) : void{
    this.correo = (event.target as HTMLInputElement).value;
    this.fecha1 = Date.now();
  }
  public cambiaClave(event : Event) : void{
    this.clave = (event.target as HTMLInputElement).value;
  }

  public tomaFecha(evento : Event): void{
    this.fecha2 = (evento.target as HTMLInputElement).value;
  }

  public cambiaIp1(event : Event) : void{
    this.ip1 = parseInt((event.target as HTMLInputElement).value);
  }

  public cambiaIp2(event : Event) : void{
    this.ip2 = parseInt((event.target as HTMLInputElement).value);
  }

  public cambiaIp3(event : Event) : void{
    this.ip3 = parseInt((event.target as HTMLInputElement).value);
  }

  public cambiaIp4(event : Event) : void{
    this.ip4 = parseInt((event.target as HTMLInputElement).value);
  }

  public enviarDatos() : void{
    this.datos.buscarDocente(this.correo, this.clave, this.ip1, this.ip2, this.ip3, this.ip4, this.fecha2);
  }
}
