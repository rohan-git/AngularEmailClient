import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label = '';
  @Input() control = new FormControl();
  @Input() inputType = '';

  constructor() { }

  showErrors(){

    //console.log(this.control);
    
    const {dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }

  getUniqueUsernameError(){

    if(this.control.errors.uniqueUsername){
      return "Username not available, please try another username";
    }

    if(this.control.errors.asyncError) {
      return "Error occured trying to test for unique username";
    }

  }

  ngOnInit(): void {
  }

}
