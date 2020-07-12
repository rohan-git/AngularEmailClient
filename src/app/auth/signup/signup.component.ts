import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({

    userName: new FormControl('', 
    [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(20), 
        Validators.pattern(/^([a-z]|[0-9])+$/)
    ]),
    password: new FormControl('',
    [
        Validators.required, 
        Validators.minLength(6), 
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
    ] 
    ),
    passwordConfirmation: new FormControl('', 
    [
      Validators.required, 
      Validators.minLength(6), 
      Validators.maxLength(20), 
      Validators.pattern(/^[a-z0-9]+$/)
    ])

  });

  constructor() { }

  ngOnInit(): void {
  }

}
