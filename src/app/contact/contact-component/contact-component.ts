import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateInvalidDomainValidator } from '../invalidEmailDomain';
import { RouterLink } from '@angular/router';


const invalidEmailDomain = CreateInvalidDomainValidator(["gmail.com", "yahoo.com", "hotmail.com"]);

@Component({
  selector: 'contact-component',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css'
})

export class ContactComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
  ContactForm = new FormGroup({
    SenderName: new FormControl('', Validators.required),
    SenderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    SenderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  submitForm() {
    // if (this.senderNameControl.dirty) {
    //   alert("Hey chuvak!");
    // }
    console.log(this.ContactForm.valid);
  }
}
