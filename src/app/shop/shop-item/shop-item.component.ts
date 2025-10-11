import { Component, Input } from '@angular/core';
import { IProduct } from '../../shared/Models/product';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.css'
})
export class ShopItemComponent {
  @Input() product: IProduct;
  selectedImage: string | null = null;
}
