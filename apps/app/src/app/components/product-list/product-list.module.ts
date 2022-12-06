import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ProductListComponent } from './product-list.component';
import { CategoryListModule } from '../category-list/category-list.module';
import { ProductServiceModule } from '../../services/product-service.module';
import { ProductSortModule } from '../../pipes/product-sort/product-sort.module';

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
    ProductSortModule,
    CategoryListModule,
    ProductServiceModule,
  ],
  exports: [ProductListComponent]
})
export class ProductListModule {
}
