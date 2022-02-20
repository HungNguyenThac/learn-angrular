import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    // params trả về 1 observerble, trả vè 1 object có key là slug< set ở routes> có value là param.
    // sau khi lấy được call API thông qua services
    this.route.params.subscribe(console.log);
  }
}
