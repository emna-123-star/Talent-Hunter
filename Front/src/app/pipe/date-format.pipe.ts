import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'appDateFormat' })
export class DateFormatPipe implements PipeTransform {
  
  constructor(private datePipe: DatePipe) {}

  transform(value: any, format: string = 'yyyy-MM-dd'): any {
    if (!value) return null;
    return this.datePipe.transform(value, format);
  }
}
