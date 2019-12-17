import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy {
  cart;
  cartSubscription: Subscription;


  constructor(
    private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => {
      let temp: any;
      temp = cart.payload.child('/items').val();
      this.cart = new ShoppingCart(temp);
    });

  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

}