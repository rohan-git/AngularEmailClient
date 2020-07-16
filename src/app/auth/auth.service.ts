import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<SignupCredentials>(this.rootUrl + '/auth/username', username);
  }
  
  signup(credentials: SignupCredentials){
    return this.http.post<SignupResponse>(this.rootUrl + '/auth/signup', credentials); 
  }
}
