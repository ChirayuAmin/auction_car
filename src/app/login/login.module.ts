import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';

export const routes=[
  {path:'', component:LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
