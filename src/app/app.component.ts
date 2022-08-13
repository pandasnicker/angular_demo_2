import { Component } from '@angular/core';
import { EmployeeService } from './employee-service.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // template:` 
  //       Your Text : 
  //       <input type="text" [(ngModel)]="userText">
  //       <br/><br/>
  //       <simple-comp [simpleInput] = 'userText'></simple-comp>
  // `,
  template :`<app-heroes></app-heroes>`,
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})

export class AppComponent {
//   title = 'Tour of Heroes';
//   num = 69;

//   isEnabled = false;

// onClick():void {
//   alert("You have entered the value : "+this.name);
// }

// name = 'Tom';

// ------------------------------------------

  userText : string="Gulam";

}
