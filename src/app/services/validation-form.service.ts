import { RegistrationService } from './registration.service';
import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationFormService {

    constructor(
        private registrationService: RegistrationService
    ) { }

    userExists() {
        return(control: AbstractControl) => {
            return control.valueChanges.pipe(
                switchMap((nameUser) =>
                    this.registrationService.checkUserExists(nameUser)
                ),
                map((userExist) =>
                    userExist ? { userExist: true } : null
                ),
                first()
            )
        }
    }

}
