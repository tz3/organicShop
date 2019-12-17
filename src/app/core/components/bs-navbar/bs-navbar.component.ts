import { AppUser } from '../../../shared/models/app-user';
import { AuthService } from '../../../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  faCoffee = faCoffee;
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService) {
  }

  logout() {
    this.auth.logout();
  }
   async ngOnInit() {
    this.auth.appUser$.subscribe(appuser => this.appUser = appuser);

    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe( temp => {
      let data: any;
      data = temp.payload.child('/items').val();
      let cart = new ShoppingCart(data);
      this.shoppingCartItemCount = cart.totalItemsCount;

   });
}
}
