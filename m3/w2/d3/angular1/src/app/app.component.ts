import { Component } from '@angular/core';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  allUsers: User[] = []


  addUser(event:User){
    let userCopy = Object.assign({}, event)
    this.allUsers.push(userCopy);
  }



}
