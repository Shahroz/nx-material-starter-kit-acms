import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PRODUCT_LIST } from './constants/route-list';

const routes: Routes = [
  {
    path: PRODUCT_LIST,
    loadChildren: () => import('./pages/products/products.module')
      .then(m => m.ProductsModule)
  }, {
    path: 'add-product',
    loadChildren: () => import('./pages/add-product/add-product.module')
      .then(m => m.AddProductModule)
  }, {
    path: 'product/:id',
    loadChildren: () => import('./pages/product-details/product-details.module')
      .then(m => m.ProductDetailsModule)
  }, {
    path: ':category/products',
    loadChildren: () => import('./pages/category-products/category-products.module')
      .then(m => m.CategoryProductsModule),
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
