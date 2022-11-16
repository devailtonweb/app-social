import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { User } from '../models/user.model';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private url: string = 'http://localhost:3000/login';

    constructor(
        private httpClient: HttpClient,
        private userService: UserService
    ) { }

    authenticator(user: User): Observable<HttpResponse<any>> {
        return this.httpClient.post<any>(
            this.url,
            user,
            { observe: 'response' }
        ).pipe(
            tap((result) => {
                const authToken = result.body.accessToken ?? '';
                this.userService.setCredentialsUser(authToken);
            })
        );
    }

}
