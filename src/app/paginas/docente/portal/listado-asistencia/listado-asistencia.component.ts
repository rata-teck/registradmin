import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-asistencia',
  templateUrl: './listado-asistencia.component.html',
  styleUrls: ['./listado-asistencia.component.scss']
})
export class ListadoAsistenciaComponent {
  @Input()
  public presentes! : Array<any>;

  @Input()
  public ausentes! : Array<any>;

  @Input()
  public fecha! : number;
}
