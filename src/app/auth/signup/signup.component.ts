import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private matchPassword: MatchPassword, 
              private uniqueUsername: UniqueUsername) { }

  authForm = new FormGroup({

    userName: new FormControl('', 
    [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(20), 
        Validators.pattern(/^([a-z]|[0-9])+$/)
    ], 
    [
      this.uniqueUsername.validate
    ]
    ),
    password: new FormControl('',
    [
        Validators.required, 
        Validators.minLength(6), 
        Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('', 
    [
      Validators.required, 
      Validators.minLength(6), 
      Validators.maxLength(20)
    ])

  }, {
    validators: [this.matchPassword.validate]
  }
  );


  ngOnInit(): void {
  }

}
