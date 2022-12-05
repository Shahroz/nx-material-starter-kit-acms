import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PRODUCT_LIST } from '../../constants/route-list';
import { CategoryService, ProductService } from '../../services';

@Component({
  selector: 'lowgular-acms-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent implements OnInit, OnDestroy {
  public productListRoute: string = PRODUCT_LIST;

  public submitting: boolean = false;
  public categoryList$: Observable<string[]> = of([]);
  public productForm: FormGroup = new FormGroup<any>({
    title: new FormControl<string | null>(null, [Validators.required]),
    price: new FormControl<number | null>(null, [Validators.required]),
    category: new FormControl<string | null>(null, [Validators.required]),
    description: new FormControl<string | null>(null, [Validators.required]),
  });

  private _onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private _router: Router,
    private readonly _productService: ProductService,
    private readonly _categoryService: CategoryService,
  ) {
  }

  ngOnInit() {
    this.categoryList$ = this._categoryService.getAll();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
    this.productForm.reset({}, {emitEvent: false});
  }

  onSubmit(): void {
    const {valid, value} = this.productForm;
    if (valid) {
      this._productService.create(value)
        .pipe(
          tap(() => {
            this.submitting = true;
          }),
          takeUntil(this._onDestroy$)
        ).subscribe({
        next: (res: any) => {
          this.goToProductListPage();
        },
        error: err => {
          this.toggleSubmittingHandler(false);
        },
        complete: () => {
          this.toggleSubmittingHandler(false);
        }
      });
    }
  }

  private toggleSubmittingHandler(bool: boolean): void {
    if (bool !== this.submitting) {
      this.submitting = bool;
    }
  }

  private goToProductListPage(): void {
    this._router.navigateByUrl(this.productListRoute);
  }
}
