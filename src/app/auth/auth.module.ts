import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [SigninComponent, SignoutComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule, ReactiveFormsModule, SharedModule
  ]
})
export class AuthModule { }
