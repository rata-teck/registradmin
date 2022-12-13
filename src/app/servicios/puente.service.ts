import { Injectable } from '@angular/core';

import {Alumno, Asistencia} from '../modelos/alumno';
import {Asignatura} from '../modelos/asignatura';
import {Docente} from '../modelos/docente';
import {Router, ActivatedRoute} from '@angular/router';
import { delay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PuenteService {

  constructor(
    private portero : Router
  ) { }

  public alumno : Alumno = {
    nombre : '',
    apellido : '',
    id : '',
    clave : '',
    edad : 0,
    genero : 'Masculino',
    carrera : ''
  }

  public alumnos : Array<Alumno> = [];

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
    alumnos : [],
    id : ''
  }

  public asignaturas : Array<Asignatura> = [];

  public mensaje : string = '';

  public bdd : string = '';

  public fecha : string = "";

  public qrData = {
    fecha : 0,
    asignatura: ''
  }

  //public obtenerDireccion() : void{
    //const ip = require("local-ip-address");
    //this.servidor = ip();
  //}

  public buscarDocente(correo : string, clave : string, fecha: number) : void{
    this.qrData.fecha = fecha;
  }

  public buscarAsignatura(codigo : string) : void{
    this.qrData.asignatura = codigo;
  }

  public traerAsignaturas() : void{

  }

  public verIp() : void{
  }

}
