import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lowgular-acms-products',
  templateUrl: './category-products.component.html',
})
export class CategoryProductsComponent {
  public category: string | null = this._activatedRoute.snapshot.paramMap.get('category');

  constructor(
    private _activatedRoute: ActivatedRoute,

  ) {
  }
}
