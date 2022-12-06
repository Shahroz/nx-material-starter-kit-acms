import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';

import { IProduct } from '../../models';
import { ProductService } from '../../services';
import { PRODUCT_LIST } from '../../constants/route-list';

@Component({
  selector: 'lowgular-acms-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() category: string | null = null;
  @Input() showSorting: boolean = true;
  @Input() showDeleteBtn: boolean = false;
  @Input() showCategoryList: boolean = true;

  public sortOrder: 'asc' | 'desc' = 'asc';
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

  removeProduct(id?: number): void {
    if (id) {
      this._productService.delete(id)
        .pipe(
          takeUntil(this._onDestroy$)
        ).subscribe({
        next: (res: any) => {
          if (res?.id) {
            this.goToProductPage();
          }
        }
      });
    }
  }

  goToProductPage(category?: string): void {
    let url: string = `/${PRODUCT_LIST}`;
    if (category) {
      url = `/${category}${url}`;
    }
    this._router.navigateByUrl(url);
  }

  fetchAllProducts(): void {
    const url: string | undefined = this.category ? `category/${this.category}` : undefined;
    this.productList$ = this._productService.getAll(url);
  }
}
