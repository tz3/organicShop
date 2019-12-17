import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../service/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('product') product: Product;
  // tslint:disable-next-line: no-input-rename
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
  removeFromCart() {
    this.cartService.removeFromCart(this.product);

  }
//   getQuantity() { // dd
//     if (!this.shoppingCart) { return 0; }

//     const item = this.shoppingCart.itemsMap[this.product.key];
//     return item ? item.quantity : 0;
//  }

}
