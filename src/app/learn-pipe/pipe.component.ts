import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { userLike } from './filter-userList.pipe';
import { AddressLike } from './format-address.pipe';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  date = new Date();
  user = {
    name: 'Nguyen Thac Hung',
    age: '28',
  };
  currency = 'VND';

  address: AddressLike = {
    address1: 'Đình Xuyên',
    address2: 'Gia Lâm',
    address3: 'Hà Nội',
    country: 'Việt Nam',
  };
  userList: userLike[] = [
    { name: 'Hung', age: 18 },
    { name: 'Dung', age: 20 },
    { name: 'Manh', age: 17 },
  ];

  interval$ = interval(1000);
  constructor() {}

  ngOnInit(): void {}
}
