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

  public presentes : Array<Alumno> = [];
  public ausentes : Array<Alumno> = [];

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
    let todos : Array<string> = [];

    // Alumnos de la asignatura
    this.db.doc<Asignatura>('asignaturas/'+this.qrData.asignatura).get().subscribe(data1 => {
      const a01 = data1.data();
      if(a01 !== undefined){
        for(let a02 of a01.alumnos){
          todos.push(a02);
        }
      }
    });

    // Alumnos presentes
    for(let a03 of todos){
      this.db.collection<Asistencia>('asistencias').get().subscribe(data2 => {
        let a04 = data2.docs;
        for(let a05 of a04){
          let a06 = a05.data();
          if(a06 !== undefined){
            if(a06.alumno == a03){
              if(a06.asignatura == this.qrData.asignatura){
                if(a06.fecha == this.qrData.fecha){
                  if(a06.estado == 'Presente'){
                    presentes.push(a03);
                  }
                }
              }
            }
          }
        }
      });
    }

    // Alumnos ausentes
    for(let a07 of todos){
      let a08 = 0;
      for(let a09 of presentes){
        if(a07 == a09 ){
          a08 += 1;
        }
      }
      if(a08 == 0){
        ausentes.push(a07);
      }
    }

    // Grabar ausentes
    for(let a10 of ausentes){
      let a11 : Asistencia = {
        alumno : a10,
        asignatura : this.qrData.asignatura,
        estado : 'Ausente',
        fecha : this.qrData.fecha
      }
      this.db.collection('asistencias').add({...a11});
    }

    // Listar presentes
    for(let a12 of presentes){
      this.db.doc<Alumno>('alumnos/'+a12).get().subscribe(data3 => {
        let a13 = data3.data();
        if(a13 !== undefined){
          this.presentes.push(a13);
        }
      });
    }

    // Listar ausentes
    for(let a14 of ausentes){
      this.db.doc<Alumno>('alumnos/'+a14).get().subscribe(data4 => {
        let a15 = data4.data();
        if(a15 !== undefined){
          this.ausentes.push(a15);
        }
      });
    }
  }
}
