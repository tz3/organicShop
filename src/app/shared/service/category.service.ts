import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, IterableDiffers } from '@angular/core';
import { map } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories', ref => (ref.orderByChild('name')))
    .snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
        // spread operator ...item which is
        // title: isNgTemplate.title,
        // imageUrl = item.imageUrl;
        // price: item.price
        // all these three lines can be shorcuted to:
        // ...item, productId
      )
    );
}
}
