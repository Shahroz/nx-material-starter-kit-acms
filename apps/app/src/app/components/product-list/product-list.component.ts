import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';

import { IProduct } from '../../models';
import { ProductService } from '../../services';

@Component({
  selector: 'lowgular-acms-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() category !: string;
  @Input() showSorting: boolean = true;
  @Input() showDeleteBtn: boolean = false;
  @Input() showCategoryList: boolean = true;

  public productList$: Observable<IProduct[]> = of([]);

  private _onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private readonly _productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.fetchAllProducts();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  removeProduct(id: number): void {
    this._productService.delete(id)
      .pipe(
        takeUntil(this._onDestroy$)
      ).subscribe();
  }

  goToCategoryProductPage(category: string): void {
    this._router.navigateByUrl(`/${category}/product`);
  }

  fetchAllProducts(sortOrder: string = 'asc'): void {
    const params: HttpParams = new HttpParams();
    if (sortOrder) {
      params.append('sort', sortOrder);
    }
    this.productList$ = this._productService.getAll({
      path: this.category ? `category/${this.category}` : undefined,
      params
    });
  }
}
