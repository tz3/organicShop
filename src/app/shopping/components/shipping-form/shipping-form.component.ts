import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/service/auth.service';
import { OrderService } from '../../../shared/service/order.service';
import { Subscription } from 'rxjs';
import { Order } from '../../../shared/models/order';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {}

  ngOnInit() {
    this.userSubscription =
    this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    // tslint:disable-next-line:prefer-const
    let order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    // console.log(order);
    this.router.navigate(['/order-success', result.key]);
  }
}