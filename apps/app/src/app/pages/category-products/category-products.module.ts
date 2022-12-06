import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryProductsComponent } from './category-products.component';
import { ProductListModule } from '../../components/product-list/product-list.module';

const routes: Routes = [
  {
    path: '',
    component: CategoryProductsComponent,
  }
];

@NgModule({
  declarations: [CategoryProductsComponent],
  imports: [
    ProductListModule,
    RouterModule.forChild(routes)
  ],
})
export class CategoryProductsModule {
}
