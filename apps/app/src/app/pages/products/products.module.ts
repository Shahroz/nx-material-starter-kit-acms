import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListModule } from '../../components/product-list/product-list.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  }
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductListModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductsModule {
}
