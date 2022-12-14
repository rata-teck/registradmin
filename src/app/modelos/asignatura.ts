import {DocumentData} from 'firebase/firestore/dist/firestore';

export interface Asignatura{
  nombre : string,
  sigla : string,
  seccion : string,
  alumnos : Array<string>
}
