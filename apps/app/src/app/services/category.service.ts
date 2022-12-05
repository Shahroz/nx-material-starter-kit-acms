import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_CATEGORIES_API_URL } from '../constants/api-list';

@Injectable()
export class CategoryService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<string[]> {
    return this._httpClient.get<string[]>(BASE_CATEGORIES_API_URL);
  }
}
