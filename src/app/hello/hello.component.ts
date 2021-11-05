import { Component, Input } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-hello',
  template: '', // inline html,
  templateUrl: './hello.component.html', //binding template,
  styles: [], // inline style
  styleUrls: ['./hello.component.scss'], //binding style
})
export class HelloComponent {
  inputTest = 'button';

  inputValue = 'ngthachung';

  testClassVariable = "box isDanger"

  click(event: any) {
    console.log(event);
  }

  contact = {
    name: 'hung',
    phone: '0965882467',
    age: 30,
  };

  users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    }
  ];

  tags = ['stypeScript', 'php', 'html'];

  Danger = true;
  Warning = true;

  @Input() background = "green";
  @Input() colorBar = "yellow";
  @Input() set progress(val: number){
    //validate
    if(typeof val !== "number"){
      const progress = Number.parseInt(val)
      if(Number.isNaN(this.progress)){
        this._progress = 0;
      } else {
        this._progress = progress
      }
    }
    this._progress = val
  };

  private _progress = 50;
  get progress(){
    return this._progress
  }
}
