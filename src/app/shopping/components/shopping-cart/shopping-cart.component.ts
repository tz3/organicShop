import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: ShoppingCart = new ShoppingCart(null);
  shoppingCartItemCount: number;
  shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe( temp => {
      // tslint:disable-next-line:prefer-const
      let data: any;
      data = temp.payload.child('/items').val();
      // data = temp.payload.val();
      this.cart = new ShoppingCart(data);
      this.shoppingCartItemCount = this.cart.totalItemsCount;
      // console.log('data', data);

    });
  }
  clearCart() {
    this.shoppingCartService.clearCart();
  }

}
