import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DataTablesModule } from 'angular-datatables';

import { UserComponent } from './user.component';
import { ROUTES } from './user.route';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    //DataTablesModule,
    ROUTES
  ],
  declarations: [UserComponent]
})
export class UserModule { }
