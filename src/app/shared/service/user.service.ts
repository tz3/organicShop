import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs';
import { User } from 'firebase';
// import { AppUser } from '../models/app-user';
// import { FirebaseObjectObservable } from '@angular/fire/database-deprecated';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
