import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUser } from 'src/app/models/user.model';
import { lowercaseFormValidator } from 'src/app/utils/lowercase-form.validator';

import { RegistrationService } from './../../services/registration.service';
import { ValidationFormService } from './../../services/validation-form.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    formUser!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private registrationService: RegistrationService,
        private validationFormService: ValidationFormService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.formUser = this.formBuilder.group({
            name: [null, [
                Validators.required,
                Validators.minLength(4)]
                //[this.validationFormService.userExists()]
            ],
            lastName: [null, [Validators.required, Validators.minLength(4)]],
            email: [null, [Validators.required, Validators.email, lowercaseFormValidator]],
            password: [null, [Validators.required]],
            document: [null, [Validators.required]],
            phone: [null, [Validators.required]]
        })
    }

    registration(){

        if(this.formUser.valid) {
            const newUser = this.formUser.getRawValue() as NewUser;
            this.registrationService.newUser(newUser).subscribe({
                next: () => { this.router.navigate(['']); },
                error: (error) => { console.error(error); }
            });
        }
    }

}
