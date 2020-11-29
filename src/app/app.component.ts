import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


interface Data {
  firstName: string;
  lastName: string;
  eMail: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
form = new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
  eMail: new FormControl()
})
  row = [
    {
      firstName: 'John',
      lastName: 'Doe',
      eMail: 'johndoe@beapartof.com'
    }
  ]
   
addUser(){
 var user = this.form.value;
  this.row.push(user);
  this.form.reset();
  }

deleteUser(i: number){
  this.row.splice(i, 1);
  }
}
