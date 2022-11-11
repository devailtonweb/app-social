import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    login() {
        const user: User = {
            email: this.email,
            password: this.password
        };
        this.authenticationService.authenticator(user)
        .subscribe({
            next: (v) => {
                this.router.navigateByUrl("companies");
            },
            error: (e) => console.error(e)
        });
    }
}
