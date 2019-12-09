import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'phoneNumber',
  pure: false
})

export class PhoneNumberPipe implements PipeTransform {

  transform(value: number): string {
     return ` + ${value.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}`;
  }
}
