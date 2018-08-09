import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { CONFIG } from '../config/shared.config';
import { Http } from '@angular/http';

const cardetail = CONFIG.apiRoutes.cardetail;
const createcar = CONFIG.apiRoutes.createcar;
const updatecar = CONFIG.apiRoutes.updatecar;
const deletecar=CONFIG.apiRoutes.deletecar;

@Injectable()

export class CarinfoService {

  constructor(private restService: RestService, private http: Http) { }

  getallcardetail() {
    return this.restService.get(cardetail);
  }

  createcar(car) {
    return this.restService.post(createcar, car);
  }

  updatecar(car, carId) {
    return this.http.put(updatecar + "/" + carId, car);
  }

  deletecar(carId){
    return this.http.delete(deletecar+"/"+carId);
  }
}
