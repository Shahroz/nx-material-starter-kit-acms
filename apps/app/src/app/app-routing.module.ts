import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
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
    loadChildren: () => import('./pages/products/products.module')
      .then(m => m.ProductsModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot([])],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
