import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Alumno} from '../modelos/alumno';
import {Asignatura} from '../modelos/asignatura';
import {Docente} from '../modelos/docente';

@Injectable({
  providedIn: 'root'
})
export class PuenteService {

  constructor(
    private cliente : HttpClient
  ) { }

  public alumno : Alumno = {
    nombre : '',
    apellido : '',
    id : '',
    clave : '',
    edad : 0,
    genero : 'Masculino',
    carrera : '',
    asistencias : []
  }

  public docente : Docente = {
    nombre : '',
    apellido : '',
    especialidad : '',
    genero : 'Masculino',
    id : '',
    clave : '',
    asignaturas : []
  }

  public asignatura : Asignatura = {
    nombre : '',
    sigla : '',
    seccion : '',
    alumnos : []
  }
}
