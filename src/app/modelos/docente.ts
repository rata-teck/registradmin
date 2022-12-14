import {DocumentData} from 'firebase/firestore/dist/firestore'

export interface Docente{
  id : string,
  nombre : string,
  apellido : string,
  especialidad : string,
  genero : string,
  clave: string,
  asignaturas : Array<string>
}
