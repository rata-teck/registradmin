import {Asignatura} from './asignatura';
export interface Docente {
  nombre : string,
  apellido : string,
  especialidad : string,
  genero : 'Masculino'|'Femenino',
  id: string, //email
  clave: string,
  asignaturas : Array<Asignatura>
}
