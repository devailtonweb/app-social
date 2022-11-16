import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

    private url: string = 'http://localhost:3000/register';

    constructor(
        private httpClient: HttpClient
    ) { }

    newUser(user: NewUser): Observable<NewUser> {
        return this.httpClient.post<NewUser>(this.url, user);
    }

    checkUserExists(name: string): Observable<Boolean> {
        return this.httpClient.get<Boolean>(`${this.url}/user/exists/${name}`);
    }

}
