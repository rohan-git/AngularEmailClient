import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'AngularEmailClient';
  signedIn = false;

  constructor(private authService: AuthService){}

  ngOninit() {
    this.authService.signedIn$.subscribe(signedIn=> {
      this.signedIn = signedIn
    }); 
  }

  
}
