import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Docente} from './../modelos/docente';
import {Asignatura} from './../modelos/asignatura';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PuenteService {
  constructor(
    public db :AngularFirestore,
    private paradero : Router
  ) { }
  public docente! : Docente;
  public mensaje : string = '';
  public qrData = {
    fecha : 0,
    asignatura : ''
  }
  public  asignaturas : Array<Asignatura> = [];
  public buscarDocente(id : string, clave : string, fecha : number) : void{
    this.db.doc<Docente>('docentes/'+id).get().subscribe(data => {
      const d2 = data.data();
      if(d2 !== undefined){
        if(d2.clave == clave){
          this.docente = d2;
        }
      }
    });
    this.qrData.fecha = fecha;
    this.traerAsignaturas();
    this.paradero.navigateByUrl('/docente')
  }
  public traerAsignaturas() : void{}
}
