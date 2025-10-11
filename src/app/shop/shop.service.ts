import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private readonly http: HttpClient) { }
  baseUrl = 'https://localhost:7185/api/';
  getProduct() {
    return this.http.get<IPagination>(this.baseUrl + 'Product');
  }
}
