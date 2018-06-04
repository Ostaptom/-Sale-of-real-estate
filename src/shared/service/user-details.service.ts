import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Subject} from 'rxjs/Subject';
import {isNullOrUndefined} from 'util';

@Injectable()
export class UserDetailsService {

  user: User = new User();
  private _user: Subject<User> = new Subject<User>();
  user$ = this._user.asObservable();

  login(user: User) {
    this.user = user;
    this._user.next(this.user);
  }

  logout() {
    this.user = new User();
    this._user.next(this.user);
    this.deleteToken();
  }

  checkAuth(): boolean {
    return !isNullOrUndefined(localStorage.getItem('access_token'));
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  saveToken(data) {
    this.deleteToken();
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('token_type', data.token_type);
    localStorage.setItem('expires_in', new Date().setSeconds(data.expires_in) + '');
    localStorage.setItem('scope', data.scope);
    localStorage.setItem('jti', data.jti);
    localStorage.setItem('refresh_token', data.refresh_token);
  }

  deleteToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('scope');
    localStorage.removeItem('jti');
    localStorage.removeItem('refresh_token');
  }

}
