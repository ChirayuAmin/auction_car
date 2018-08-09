import { Injectable } from '@angular/core';
import { CONFIG, SERVER_MODE } from '../config/shared.config';
import { CompilerConfig } from '@angular/compiler/src/config';

@Injectable()
export class DeploymentsettingService {
  private serverMode;
  private apiUrl;

  constructor() { 
    this.serverMode=this.getServerMode();
  }

  private getServerMode(){
    this.serverMode=CONFIG.deployment.serverMode;
    return this.serverMode;
  }

  getApiUrl(){
    if (this.serverMode==SERVER_MODE.Local)
      this.apiUrl=CONFIG.apiUrls.local;

    return this.apiUrl;
  }

}
