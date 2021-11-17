import { Component } from '@angular/core';

let _count = 1;
@Component({
  selector: 'app-count-component',
  template: '<p> count: {{count}}</p>',
  styles: [],
})
export class CountComponnet {
  count = _count++;
}
