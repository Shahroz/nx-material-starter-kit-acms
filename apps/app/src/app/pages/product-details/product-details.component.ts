import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../../models';
import { ProductService } from '../../services';

@Component({
  selector: 'lowgular-acms-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public product: IProduct | null = null;

  private _onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
  ) {
  }

  ngOnInit() {
    const id: string | null = this._activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this._productService.getOne(id)
        .pipe(
          takeUntil(this._onDestroy$)
        ).subscribe({
        next: (product: IProduct) => {
          this.product = product;
        },
      });
    }
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
