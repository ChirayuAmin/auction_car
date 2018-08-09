import { Injectable } from '@angular/core';
import { CONFIG } from '../config/shared.config';
import { RestService } from './rest.service';

const adduser = CONFIG.apiRoutes.adduser;
const updateuser = CONFIG.apiRoutes.updateuser;
const bindusers=CONFIG.apiRoutes.bindusers;

@Injectable()
export class UserService {

  constructor(private restService: RestService) { }

  insertuser(users) {
    return this.restService.post(adduser, users);
  }

  updateuser(users) {
    return this.restService.put(updateuser,users);
  }

  binduser(){
    return this.restService.get(bindusers);
  }

}
