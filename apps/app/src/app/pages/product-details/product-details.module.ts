import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import {ProductDetailsComponent} from './product-details.component';
import { ProductServiceModule } from '../../services/product-service.module';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent,
  }
];

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    ProductServiceModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductDetailsModule {
}
