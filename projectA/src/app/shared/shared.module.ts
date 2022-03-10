import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent,
    FormComponent,
    FilterProductsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductComponent,
    FormComponent,
    FilterProductsPipe
  ]
})
export class SharedModule { }
