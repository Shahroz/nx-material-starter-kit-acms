import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CategoryService } from '../../services';

@Component({
  selector: 'lowgular-acms-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {
  public categoryList$: Observable<string[]> = of([]);

  @Output() categoryChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly _categoryService: CategoryService,
  ) {
  }

  ngOnInit() {
    this.categoryList$ = this._categoryService.getAll();
  }
}
