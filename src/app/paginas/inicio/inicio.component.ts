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

  public correo : string = '';
  public clave : string = '';

  public cambiaCorreo(event : Event) : void{
    this.correo = (event.target as HTMLInputElement).value;
  }
  public cambiaClave(event : Event) : void{
    this.clave = (event.target as HTMLInputElement).value;
  }
  public enviarDatos() : void{
    this.datos.buscarDocente(this.correo, this.clave);
  }
}
