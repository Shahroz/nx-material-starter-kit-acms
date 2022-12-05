import {NgModule} from '@angular/core';

import { ProductsComponent } from './products.component';
import { ProductListModule } from '../../components/product-list/product-list.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductListModule,
  ],
})
export class ProductsModule {
}
