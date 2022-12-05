import { Asignatura } from "./asignatura";
type Asistencia = {
  asignatura : Asignatura,
  estado : 'Presente' | 'Ausente' | 'Justificado',
  fecha : Date
}

export interface Alumno {
  nombre : string,
  apellido : string,
  edad : number,
  genero : 'Masculino'|'Femenino',
  carrera : string,
  asistencias : Array<Asistencia>
}
