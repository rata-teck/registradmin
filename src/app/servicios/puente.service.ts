import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Docente} from './../modelos/docente';
import {Asignatura} from './../modelos/asignatura';
import {Router} from '@angular/router';
import { Alumno, Asistencia } from '../modelos/alumno';

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
  
  public cerrarAsistencia() : void {
    let presentes : Array<string> = [];
    let ausentes : Array<string> = [];
    let ids : Array<string> = [];
    let total : Array<string> = [];

    // Alumnos de la asignatura
    this.db.doc<Asignatura>('asignaturas/'+this.qrData.asignatura).get().subscribe(data1 => {
      const a01 = data1.data();
      if(a01 !== undefined){
        for(let a02 of a01.alumnos){
          total.push(a02);
        }
      }
    });

    // Todos los presentes
    this.db.collection<Asistencia>('asistencias').get().subscribe(data2 => {
      const a03 = data2.docs;
      for(let a04 of a03){
        if(a04.data().estado == 'Presente'){
          ids.push(a04.id);
        }
      }
    });

    // Presentes de la asignatura y fecha indicada
    for(let a05 of ids){
      this.db.doc<Asistencia>('asistencias/'+a05).get().subscribe(data3 => {
        const a06 = data3.data();
        if(a06 !== undefined){
          for(let a07 of total){
            if(a06.alumno == a07 && a06.asignatura == this.qrData.asignatura && a06.fecha == this.qrData.fecha){
              presentes.push(a07);
            }
          }
        }
      });
    }

    // Ausentes = Total - Presentes;
    for(let a08 of total){
      let a09 = '';
      for(let a10 of presentes){
        if(a08 == a10){
          a09 = a08;
        }
      }
      if(a09 != a08){
        ausentes.push(a08);
      }
    }

    // Grabar ausentes
    for(let a11 of ausentes){
      let a12 : Asistencia = {
        alumno: a11,
        asignatura: this.qrData.asignatura,
        estado: 'Ausente',
        fecha: this.qrData.fecha
      }
      this.db.collection<Asistencia>('asistencias').add(a12);
    }
  }
}
