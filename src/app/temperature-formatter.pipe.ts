import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturePipe',
  pure: false
})

export class TemperaturePipe implements PipeTransform {

  transform(value: number): string {
      return `${value}\xB0C`
    }
}
