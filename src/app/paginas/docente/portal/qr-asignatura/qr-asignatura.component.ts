import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qr-asignatura',
  templateUrl: './qr-asignatura.component.html',
  styleUrls: ['./qr-asignatura.component.scss']
})
export class QrAsignaturaComponent {
  @Input()
  public data! : any;

  @Output()
  private espada = new EventEmitter();

  public atacar() : void{
    this.espada.emit();
  }

}
