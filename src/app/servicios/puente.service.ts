import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Alumno} from '../modelos/alumno';
import {Asignatura} from '../modelos/asignatura';
import {Docente} from '../modelos/docente';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PuenteService {

  constructor(
    private cliente : HttpClient,
    public ruta : ActivatedRoute
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
    alumnos : [],
    id : ''
  }

  public mensaje : string = '';

  public servidor : string = '';

  public obtenerDireccion() : void{
    const ip = require("local-ip-address");
    this.servidor = ip();
  }

  public buscarDocente(correo : string, clave : string) : void{
    this.cliente.get<Docente>(this.servidor+':3000/docentes/'+correo).subscribe(data => {
      if(data.clave == clave){
        this.docente = {...data}
      }
      else{
        this.mensaje = 'Error de credenciales';
      }
    });
  }

  public buscarAsignatura(codigo : string) : void{
    this.cliente.get<Asignatura>(this.servidor+':3000/asignaturas/'+codigo).subscribe(data => {
      this.asignatura = {...data}
    });
  }

}
