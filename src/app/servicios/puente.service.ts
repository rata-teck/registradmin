import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Alumno} from '../modelos/alumno';
import {Asignatura} from '../modelos/asignatura';
import {Docente} from '../modelos/docente';
import {Router, ActivatedRoute} from '@angular/router';
import { delay } from 'rxjs';

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

  public qrData : Array<string> = [];

  //public obtenerDireccion() : void{
    //const ip = require("local-ip-address");
    //this.servidor = ip();
  //}

  public buscarDocente(correo : string, clave : string, ip1 : number, ip2 : number, ip3 : number, ip4 : number, fecha : number) : void{
    this.bdd = 'http://'+ip1+'.'+ip2+'.'+ip3+'.'+ip4+':4200/api';
    this.qrData = [];
    this.cliente.get<Docente>(this.bdd+'/docentes/'+correo).subscribe(data => {
      if(data.clave == clave){
        this.docente = {...data}
        this.traerAsignaturas();
        this.portero.navigateByUrl('/docente');
      }
      else{
        this.mensaje = 'Error de credenciales';
      }
    });
    this.qrData.push(this.bdd);
    this.qrData.push(' '+fecha.toString());
  }

  public buscarAsignatura(codigo : string) : void{
    this.qrData.push(' '+codigo);
    this.cliente.get<Asignatura>(this.bdd+'/asignaturas/'+codigo).subscribe(data => {
      this.asignatura = {...data}
    });
    delay(500);
  }

  public traerAsignaturas() : void{
    this.cliente.get<Asignatura[]>(this.bdd+'/asignaturas').subscribe(data => {
      this.asignaturas = [];
      for(let x of data){
        for(let y of this.docente.asignaturas){
          if(y == x.id){
            this.asignaturas.push({...x});
          }
        }
      }
    });
  }

}
