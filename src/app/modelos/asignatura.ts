import { Alumno } from "./alumno";
export interface Asignatura {
  nombre : string,
  sigla : string,
  seccion : string,
  alumnos : Array<Alumno>
}
