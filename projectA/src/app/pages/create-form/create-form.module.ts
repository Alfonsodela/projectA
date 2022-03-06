import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './create-form-routing.module';
import { CreateFormComponent } from './create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class CreateFormModule { }
