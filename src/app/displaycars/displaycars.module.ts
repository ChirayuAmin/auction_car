import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DisplaycarsComponent } from './displaycars.component';
import { ROUTES } from './displaycars.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTES
  ],
  declarations: [DisplaycarsComponent]
  
})
export class DisplaycarsModule { }
