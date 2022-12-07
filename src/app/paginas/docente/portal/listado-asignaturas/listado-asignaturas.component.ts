import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-asignaturas',
  templateUrl: './listado-asignaturas.component.html',
  styleUrls: ['./listado-asignaturas.component.scss']
})
export class ListadoAsignaturasComponent {
  @Input()
  public asignaturas! : Array<any>;

  @Output()
  private laGarra = new EventEmitter<string>();

  public laGarraSeMueve(adiosAmigo : string) : void{
    this.laGarra.emit(adiosAmigo); // me voy a un lugar mejor ;)
  }
}
