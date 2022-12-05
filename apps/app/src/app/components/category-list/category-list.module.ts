import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import {CategoryListComponent} from './category-list.component';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    MatChipsModule,
  ],
  exports: [
    CategoryListComponent
  ]
})
export class CategoryListModule {
}
