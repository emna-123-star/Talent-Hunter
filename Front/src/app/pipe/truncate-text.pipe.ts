import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appTruncateText' })
export class TruncateTextPipe implements PipeTransform {
  
  transform(value: string, limit: number = 50): string {
    if (!value) return value;
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
