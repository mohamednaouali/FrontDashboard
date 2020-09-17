import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';
    invalidLogin = false;

    constructor( public router: Router , private loginservice: AuthenticationService  ) {}

    ngOnInit() {

    }

    onLoggedin() {
        if (this.loginservice.authenticate(this.username, this.password)
        ) {
            this.router.navigate(['/all-services']);
            this.invalidLogin = false;
            localStorage.setItem('isLoggedin', 'true');
        } else {
            alert('user name or password invalid');
            this.invalidLogin = true;
        }

    }
    logOut() {
        sessionStorage.removeItem('username');
    }
}
