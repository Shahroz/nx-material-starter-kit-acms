import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ProductListComponent } from './product-list.component';
import { ProductServiceModule } from '../../services/product-service.module';
import { CategoryListModule } from '../category-list/category-list.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    CategoryListModule,
    ProductServiceModule,
  ],
  exports: [ProductListComponent]
})
export class ProductListModule {
}
