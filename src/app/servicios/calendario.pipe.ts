import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'calendario'
})
export class CalendarioPipe extends DatePipe implements PipeTransform {

  override transform(value: any, ...args: any): any {
    return super.transform(value, 'dd/MM/YYYY');
  }

}
