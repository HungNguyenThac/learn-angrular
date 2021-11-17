import { Pipe, PipeTransform } from '@angular/core';
export interface AddressLike {
  address1: string;
  address2: string;
  address3: string;
  country?: string;
}
@Pipe({
  name: 'formartAddress',
})
export class FormartAddressPipe implements PipeTransform {
  transform(add: AddressLike) {
    return (
      add.address1 + ' ' + add.address2 + ' ' + add.address3 + ' ' + add.country
    );
  }
}
