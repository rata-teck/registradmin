import { Component } from '@angular/core';
import {PuenteService} from './../../../servicios/puente.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {

  constructor(
    public datos : PuenteService
  ){}

  public modo : number = 1;

  public cambiaModo(nuevo : number) : void {
    this.modo = this.modo;
  }

  public elegirAsignatura(id : string) : void{
    //this.datos.buscarAsignatura(id);
    this.modo = 2;
  }

}
