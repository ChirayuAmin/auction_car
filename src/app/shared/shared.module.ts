import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatSnackBarModule, MatFormFieldModule } from '@angular/material';

import { AuthService } from './service/auth.service';
import { RestService } from './service/rest.service';
import { DeploymentsettingService } from './service/deploymentsetting.service';

//import { workers } from 'cluster';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  declarations: [],
  providers: [
    AuthService,
    RestService,
    DeploymentsettingService,
  ]
})
export class SharedModule { }
