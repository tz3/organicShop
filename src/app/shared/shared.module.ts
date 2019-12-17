import { DataTableModule } from 'angular7-data-table';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { CategoryService } from './service/category.service';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
import { ShoppingCartService } from './service/shopping-cart.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
