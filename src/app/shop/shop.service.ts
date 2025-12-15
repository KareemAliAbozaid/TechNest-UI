import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/pagination';
import { ICategory } from '../shared/Models/category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private readonly http: HttpClient) { }
  baseUrl = 'https://localhost:7185/api/';

  getProduct(categoryId?: number, sortSelected?: string, search?: string) {
    let param = new HttpParams();
    if (categoryId) {
      param = param.append('categoryId', categoryId.toString());
    }
    if (sortSelected) {
      param = param.append('sort', sortSelected);
    }
    if (search) {
      param = param.append('search', search);
    }
    return this.http.get<IPagination>(this.baseUrl + 'Product', { params: param });
  }

  getCategories() {
    return this.http.get<ICategory[]>(this.baseUrl + 'Categories');
  }
}
