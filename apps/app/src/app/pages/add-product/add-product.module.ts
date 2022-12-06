import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AddProductComponent} from './add-product.component';
import { ProductServiceModule } from '../../services/product-service.module';
import { CategoryServiceModule } from '../../services/category-service.module';

const routes: Routes = [
  {
    path: '',
    component: AddProductComponent,
  }
];

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    ProductServiceModule,
    CategoryServiceModule,
    RouterModule.forChild(routes),
  ],
})
export class AddProductModule {
}
