import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserToken } from './../../models/user.model';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    user$: Observable<UserToken>  = this.userService.getCredentialsUser();

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    logout(): void {
        this.userService.logout();
        this.router.navigate(['']);
    }

}
