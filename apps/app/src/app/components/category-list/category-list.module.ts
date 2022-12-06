import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import {CategoryListComponent} from './category-list.component';
import { CategoryServiceModule } from '../../services/category-service.module';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    CategoryServiceModule
  ],
  exports: [
    CategoryListComponent
  ]
})
export class CategoryListModule {
}
