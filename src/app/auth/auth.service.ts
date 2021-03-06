import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignupCredentials{
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SignupResponse{
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl:string = "https://localhost:8081";

  signedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<SignupCredentials>(this.rootUrl + '/auth/username', username);
  }
  
  signup(credentials: SignupCredentials){

    return this.http.post<SignupResponse>(this.rootUrl + '/auth/signup', credentials, {
      withCredentials:true
    })
    .pipe(
      tap(()=> {
        this.signedIn$.next(true);
      })
    );

  }
  checkAuth(){

    return this.http.get(this.rootUrl + '/auth/signedIn',{
      withCredentials: true
    }).pipe(
      tap((e)=> {
          console.log(e);
      })
    );
    
  }
}
