import {NgModule} from '@angular/core';

import { CategoryProductsComponent } from './category-products.component';
import { ProductListModule } from '../../components/product-list/product-list.module';

@NgModule({
  declarations: [CategoryProductsComponent],
  imports: [
    ProductListModule,
  ],
})
export class CategoryProductsModule {
}
