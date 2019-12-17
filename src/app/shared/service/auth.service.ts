import { UserService } from './user.service';
import { Injectable } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,
         AngularFirestoreDocument
        } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AppUser } from '../models/app-user';
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService) {

    this.user$ = this.afAuth.authState;
  }

    login() {
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);

      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
      this.afAuth.auth.signOut();
     }
     get appUser$(): Observable<AppUser> {
        return this.user$
        .pipe(switchMap(user => {
          if (user) { return this.userService.get(user.uid).valueChanges(); }

          return of(null);
        }));
  }
}

