import { Pipe, PipeTransform } from '@angular/core';
import {ListaPersonas, Persona} from '../components/abm-tabla/personas'
@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Persona, ...args: string[]): string {
    return value.nombre + ' ' + value.edad;
  }
}
