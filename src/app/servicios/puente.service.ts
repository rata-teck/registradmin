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

  public qrData = {
    s1 : 0,
    s2 : 0,
    s3 : 0,
    s4 : 0,
    fecha : 0,
    asignatura: ''
  }

  //public obtenerDireccion() : void{
    //const ip = require("local-ip-address");
    //this.servidor = ip();
  //}

  public buscarDocente(correo : string, clave : string, ip1 : number, ip2 : number, ip3 : number, ip4 : number, fecha : number) : void{
    this.bdd = 'http://'+ip1+'.'+ip2+'.'+ip3+'.'+ip4+':4200/api';
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
    this.qrData.s1 = ip1;
    this.qrData.s2 = ip2;
    this.qrData.s3 = ip3;
    this.qrData.s4 = ip4;
    this.qrData.fecha = fecha;
  }

  public buscarAsignatura(codigo : string) : void{
    this.qrData.asignatura = codigo;
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

  public verIp() : void{
  }

}
