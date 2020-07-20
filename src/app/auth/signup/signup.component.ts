import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

//import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private matchPassword: MatchPassword, 
              private uniqueUsername: UniqueUsername, 
              private authService:AuthService) { }

  authForm = new FormGroup({

    username: new FormControl('', 
    [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(20), 
        Validators.pattern(/^([a-z]|[0-9])+$/)
    ], 
    [
      //this.uniqueUsername.validate
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

  showPasswordErrors() {
    
    let p1Touched = this.authForm.get('password').touched;
    let p2ouched = this.authForm.get('passwordConfirmation').touched;
    let pErr = this.authForm.errors;

    return p1Touched && p2ouched && pErr;    
  }

  onSubmit() {

    if(this.authForm.invalid){
      return;
    }

    this.authService.signup(this.authForm.value).subscribe({
      next: (resp) => { 
        console.log(resp); 
      },
      error: (err) => {
        
        if(!err.status) {
          this.authForm.setErrors({noConnection: true});
        }

        console.log(err);
      }
    });
  }

}
