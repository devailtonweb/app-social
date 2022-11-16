import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserToken } from './../models/user.model';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private credentialsUser = new BehaviorSubject<UserToken>({});

    constructor(
        private tokenService: TokenService
    ) {
        const hasToken = this.tokenService.hasToken();
        if(hasToken){
            this.decodeJWT();
        }
    }

    private decodeJWT(): void {
        const token  = this.tokenService.getToken();
        const user = jwt_decode(token) as UserToken;
        this.credentialsUser.next(user);
    }

    getCredentialsUser(): Observable<UserToken> {
        return this.credentialsUser.asObservable();
    }

    setCredentialsUser(token: string): void {
        this.tokenService.setToken(token);
        this.decodeJWT();
    }

    logout(): void {
        this.tokenService.removeToken();
        this.credentialsUser.next({});
    }

    hasLogin(): Boolean {
        return this.tokenService.hasToken();
    }

}
