import { Pipe, PipeTransform } from '@angular/core';
export interface userLike {
  name: string;
  age: number;
}
@Pipe({
  name: 'filterUserList',
  // Pipe có thể nhận vào một pipe khác và gọi hàm transform trong transform với pipe tương ứng
  // pure giúp pipe nhận ra sự khác biệt nếu kiểu dữ liệu reference type bị thay đổi [], {}, function
  // pure sẽ khiến pipe rerun tương đương với số phần tử pipe cần xử lý==> giảm hiệu suất
  // pure: false,
})
export class FilterUserPipe implements PipeTransform {
  transform(userList: userLike[]) {
    return userList.filter((user) => user.age >= 16);
  }
}
