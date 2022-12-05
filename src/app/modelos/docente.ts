import {Asignatura} from './asignatura';
export interface Docente {
  nombre : string,
  apellido : string,
  especialidad : string,
  genero : 'Masculino'|'Femenino',
  correo: string,
  clave: string,
  asignaturas : Array<Asignatura>
}
