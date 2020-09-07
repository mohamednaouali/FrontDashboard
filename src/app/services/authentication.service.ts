import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
    authenticate(username, password) {
        if (username === 'mohamed' && password === 'admin') {
            sessionStorage.setItem('username', username);
            return true;
        } else {
            return false;
        }
    }

    isUserLoggedIn() {
        const user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
    }

    logOut() {
        sessionStorage.removeItem('username');
    }
}
