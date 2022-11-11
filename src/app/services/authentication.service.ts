import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private url: string = 'http://localhost:3000/login';

    constructor(
        private httpClient: HttpClient
    ) { }

    authenticator(user: User): Observable<User> {
        return this.httpClient.post<any>(this.url, user);
    }

}
