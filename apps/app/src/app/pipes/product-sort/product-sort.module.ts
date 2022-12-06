import {NgModule} from '@angular/core';

import { ProductSortPipe } from './product-sort.pipe';

@NgModule({
  declarations: [ProductSortPipe],
  exports: [ProductSortPipe],
})
export class ProductSortModule {}
