import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/Models/product';
import { IPagination } from './shared/Models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private readonly http: HttpClient) { }
  ngOnInit(): void {
    this.getProduct();
  }
  baseUrl = 'https://localhost:7185/api/Product';
  Products: IProduct[] = [];
  getProduct() {
    return this.http.get(this.baseUrl).subscribe({
      next: (res: IPagination) => {
        this.Products = res.data;
        console.log(res);
      }
    });
  }

}
