import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Alumno} from '../modelos/alumno';
import {Asignatura} from '../modelos/asignatura';
import {Docente} from '../modelos/docente';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PuenteService {

  constructor(
    private cliente : HttpClient,
    private portero : Router
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

  public servidor : string = 'http://localhost:4200';

  //public obtenerDireccion() : void{
    //const ip = require("local-ip-address");
    //this.servidor = ip();
  //}

  public buscarDocente(correo : string, clave : string) : void{
    this.cliente.get<Docente>(this.servidor+'/api/docentes/'+correo, {headers : {'Access-Control-Allow-Origin':this.servidor}}).subscribe(data => {
      if(data.clave == clave){
        this.docente = {...data}
        this.portero.navigateByUrl('/docente');
      }
      else{
        this.mensaje = 'Error de credenciales';
      }
    });
  }

  public buscarAsignatura(codigo : string) : void{
    this.cliente.get<Asignatura>(this.servidor+'/api/asignaturas/'+codigo, {headers : {'Access-Control-Allow-Origin':'*'}}).subscribe(data => {
      this.asignatura = {...data}
    });
  }

}
