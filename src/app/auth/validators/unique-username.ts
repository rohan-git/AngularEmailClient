import { Injectable } from '@angular/core';
import { FormControl, AsyncValidator } from '@angular/forms';

import { of } from 'rxjs';
import {  map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {

    constructor(private authService: AuthService) { }

    validate = (formControl: FormControl) => {

        const { value } = formControl;
        console.log(value);

        return this.authService.usernameAvailable(value)
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
