import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
interface Store {
  name: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  //using form control created email,name,message,store field and some validation are apply
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('',[Validators.required])
  message = new FormControl('',[Validators.required])
  storeControl = new FormControl<Store | null>(null, Validators.required);

  //email validation
  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //name validation
  getErrorName() {
    return this.name.hasError('required') ? 'You must enter a Name' : '';
  }

  //message validation
  getErrorMessage() {
    return this.message.hasError('required') ? 'You must enter Message' : '';
  }

  stores: Store[] = [
    {name: 'Bangalore'},
    {name: 'Mumbai'},
    {name: 'New Delhi'},
    {name: 'Pune'},
  ];

}

