import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, AsyncValidator } from '@angular/forms';

import {  map, catchError } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {

    constructor(private http: HttpClient) { }

    validate = (formControl: FormControl) => {

        const { value } = formControl;
        console.log(value);

        return this.http.post<any>('https://localhost:8081/auth/username', {
            username: value
        })
        .pipe(
            map(value => {
                    if(value.available) {
                        return null;
                    }
                }
            ), catchError((error) => {

                console.log(error);
                return of({availableUsername: false});
            })
        );



    }
}
