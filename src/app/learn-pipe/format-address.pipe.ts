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
  // PipeTransform sẽ có hàm transform,
  // mỗi khi PipeTranform chạy sẽ gọi hàm transform,
  // hàm transform sẽ nhận vào 1 giá trị
  // ham transform sẽ nhận vào các tham số và data sẽ là tham số đầu tiên -->
  // sau đó các option sẽ là tham số thứ 2 -->

  transform(add: AddressLike, param2?: string) {
    return (
      add.address1 + ' ' + add.address2 + ' ' + add.address3 + ' ' + add.country
    );
  }
}
