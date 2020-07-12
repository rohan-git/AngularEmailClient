import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){

    return this.http.post<{available: boolean}>('https://localhost:8081/auth/username', {
            username: username
        });
  }
}
