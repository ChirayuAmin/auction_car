import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { CONFIG } from '../config/shared.config';
import { login } from '../../login/login';

const authroute = CONFIG.authApiRoute.authRoute;

@Injectable()
export class AuthService {

    constructor(private restservice: RestService) { }

    signIn(user: login) {
        var authdata = `username=${user.email}&password=${user.password}`;
        return this.restservice.post(authroute, authdata);
    }

}