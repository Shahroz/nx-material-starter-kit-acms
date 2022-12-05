import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {ProductDetailsComponent} from './product-details.component';
import { ProductServiceModule } from '../../services/product-service.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    ProductServiceModule,
  ],
})
export class ProductDetailsModule {
}
