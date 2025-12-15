import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/Models/product';
import { IPagination } from '../shared/Models/pagination';
import { ICategory } from '../shared/Models/category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  constructor(private readonly shopService: ShopService) { }

  products: IProduct[];
  categories: ICategory[];
  categoryId: number;
  sortSelected: string;
  search: string;

  @ViewChild('search') searchInput: ElementRef;
  @ViewChild('SortSelected') selected: ElementRef;

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.shopService.getProduct(this.categoryId, this.sortSelected, this.search).subscribe({
      next: (value: IPagination) => {
        this.products = value.data;
      }
    })
  }

  getAllCategories() {
    this.shopService.getCategories().subscribe({
      next: (value) => {
        this.categories = value;
      }
    })
  }
  selectedId(categoryId: number) {
    this.categoryId = categoryId;
    this.getAllProducts();
  }

  sortingOptions = [
    { name: 'Default', value: 'name' },
    { name: 'Price: Low to High', value: 'price_asc' },
    { name: 'Price: High to Low', value: 'price_desc' },
  ];


  sortingByPrice(sort: Event) {
    this.sortSelected = (sort.target as HTMLSelectElement).value;
    console.log('sortSelected =>', this.sortSelected);
    this.getAllProducts();
  }

  onSearch(search: string) {
    this.search = search;
    this.getAllProducts();
  }

  reSetValue() {
    this.search = '';
    this.sortSelected = this.sortingOptions[0].value;
    this.categoryId = 0;
    this.searchInput.nativeElement.value = '';
    this.selected.nativeElement.selectedIndex = 0;
    this.getAllProducts();
  }
}
