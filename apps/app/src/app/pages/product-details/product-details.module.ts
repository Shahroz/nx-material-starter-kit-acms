import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {ProductDetailsComponent} from './product-details.component';
import { ProductServiceModule } from '../../services/product-service.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductServiceModule,
  ],
})
export class ProductDetailsModule {
}
