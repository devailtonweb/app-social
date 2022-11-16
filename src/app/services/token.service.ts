import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }

    getToken(): string {
        return localStorage.getItem(KEY) ?? '';
    }

    setToken(token: string): void {
        localStorage.setItem(KEY, token);
    }

    removeToken(): void {
        localStorage.removeItem(KEY);
    }

    hasToken(): Boolean {
        return !!this.getToken();
    }

}
