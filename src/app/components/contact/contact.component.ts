import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title : String = 'Me contacter';
  contactForm = new FormGroup({
    'name' : new FormControl(null, Validators.required),
    'firstname' : new FormControl(null, Validators.required),
    'lastName' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, Validators.email),
    'phone' : new FormControl(null, Validators.required),
    'subject' : new FormControl(null, Validators.required),
    'message': new FormControl(null, Validators.required)
  });
  constructor() { } 

  ngOnInit(): void {
  }
  onSubmitForm(): void {
    console.log(this.contactForm.value);
  }

}
