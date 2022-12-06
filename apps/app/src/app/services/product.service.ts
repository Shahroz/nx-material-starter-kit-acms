import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProduct } from '../models/';
import { BASE_PRODUCTS_API_URL } from '../constants/api-list';

@Injectable()
export class ProductService {
  private readonly _productApiBaseUrl: string = BASE_PRODUCTS_API_URL;

  constructor(private _httpClient: HttpClient) {
  }

  getAll(path?: string): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(
      this.getFormattedApiUrl(path)
    );
  }

  create(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(
      this.getFormattedApiUrl(),
      product
    );
  }

  delete(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(
      this.getFormattedApiUrl(id),
    );
  }

  getOne(id: string): Observable<IProduct> {
    return this._httpClient.get<IProduct>(
      this.getFormattedApiUrl(id),
    );
  }

  private getFormattedApiUrl(path?: string | number): string {
    return path !== undefined
      ? `${this._productApiBaseUrl}/${path}`
      : this._productApiBaseUrl;
  }
}
