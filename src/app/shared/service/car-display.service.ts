import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { CONFIG } from '../config/shared.config';

const getcars=CONFIG.apiRoutes.getcars;

@Injectable()

export class CarDisplayService {

  constructor(public restService:RestService) { }

  getcars(name,modelNumber){
    return this.restService.get(`${getcars}/${name}/${modelNumber}`);
  }

}
