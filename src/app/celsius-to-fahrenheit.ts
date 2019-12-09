import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'celsiusToFahrenheitPipe',
  pure: false,
})

export class CelsiusToFahrenheitPipe implements PipeTransform {

  transform(celsius: any ): string {
      return `${parseInt(celsius, 10) * 9 / 5 + 32}\xB0F.`;
  }
}
