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
          this.paradero.navigateByUrl('/docente');
          this.traerAsignaturas();
        }
      }
    });
    this.qrData.fecha = fecha;
  }
  public traerAsignaturas() : void{
    this.db.collection<Asignatura>('asignaturas').get().subscribe(data => {
      for(let x of data.docs){
        for(let z of this.docente.asignaturas){
          if(z == x.id){
            let a1 = x.data();
            a1.id = x.id;
            this.asignaturas.push(a1);
          }
        }
      }
    });
  }

  public buscarAsignatura(id:string): void{
    this.qrData.asignatura = id;
  }
}
