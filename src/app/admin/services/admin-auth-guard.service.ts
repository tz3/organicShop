import { AppUser } from '../../shared/models/app-user';
import { UserService } from '../../shared/service/user.service';
import { AuthService } from '../../shared/service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
// import { map } from 'rxjs/internal/operators/map';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
        .pipe(map(appUser => appUser.isAdmin));
  }
}
