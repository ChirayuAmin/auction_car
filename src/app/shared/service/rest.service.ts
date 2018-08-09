import { Injectable, OnDestroy } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

//import { ExceptionService } from '../../core/exception.service';
import { DeploymentsettingService } from '../service/deploymentsetting.service';

@Injectable()
export class RestService {
  private apiUrl;

  constructor(private http: Http, private deploymentsettingService:DeploymentsettingService) {
    this.apiUrl = deploymentsettingService.getApiUrl();
  }

  get(url: string){
    return this.http
      .get(this.apiUrl + url, { headers: this.addheader() })
      //.catch(this.exceptionservice.catchBadResponse)
  }

  post(url: string, data) {
    return this.http
      .post(this.apiUrl + url, data, { headers: this.addheader() })
      //.catch(this.exceptionservice.catchBadResponse);
  }

  put(url: string, data) {
    return this.http
      .put(this.apiUrl + url, data, { headers: this.addheader() })
      //.catch(this.exceptionservice.catchBadResponse);
  }

  auth(url: string, authdata) {
    return this.http
      .post(this.apiUrl.replace('api', '') + url, authdata, { headers: this.addheader() })
      //.catch(this.exceptionservice.catchBadResponse);
  }



  private addheader() {
    let token;
    let headers = new Headers;
    let authdata = JSON.parse(localStorage.getItem('authorizationData'));
    token = (authdata) ? JSON.parse(localStorage.getItem('authorizationData')).token : '';

    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);
    return headers;
  }



}
