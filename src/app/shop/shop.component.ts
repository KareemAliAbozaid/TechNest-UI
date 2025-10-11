import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/Models/product';
import { IPagination } from '../shared/Models/pagination';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  constructor(private readonly shopService: ShopService) { }
  products: IProduct[];
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.shopService.getProduct().subscribe({
      next: (value: IPagination) => {
        this.products = value.data;
      }
    })
  }
}
