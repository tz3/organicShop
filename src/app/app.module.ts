import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTableModule } from 'angular7-data-table';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AppRoutingModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
