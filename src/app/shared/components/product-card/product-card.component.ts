import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../service/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('product') product: Product;
  // tslint:disable-next-line: no-input-rename
  @Input('show-actions') showActions = true;
  // tslint:disable-next-line: no-input-rename
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
  // getQuantity() { //dd
  //   if (!this.shoppingCart) { return 0; }
  //   // console.log(this.shoppingCart);
  //   const item = this.shoppingCart.itemsMap[this.product.key];
  //   return item ? item.quantity : 0;
  // }
}
