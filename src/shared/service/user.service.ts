import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  private controller = '/user';

  constructor(private _httpClient: HttpClient) {
  }

  sendCredentials(user: User): Observable<any> {
    return this._httpClient.post('/oauth/token', null, {
      params: new HttpParams()
        .set('username', user.email)
        .set('password', user.password)
        .set('grant_type', 'password')
    }).catch(err => Observable.throw(err));
  }

  get():Observable<User>{
    return this._httpClient.get(this.controller).catch(err => Observable.throw(err));
  }

  save(user: User): Observable<User> {
    return this._httpClient.post(`${this.controller}/save`, JSON.stringify(user)).catch(err => Observable.throw(err));
  }

  findOne(id: number): Observable<User> {
    return this._httpClient.get(`${this.controller}/find-one/${id}`).catch(err => Observable.throw(err));
  }

  findAll(): Observable<User[]> {
    return this._httpClient.get(`${this.controller}/find-all`).catch(err => Observable.throw(err));
  }

  findByName(name: string): Observable<User[]> {
    return this._httpClient.get(`${this.controller}/find-by-name/${name}`).catch(err => Observable.throw(err));
  }

  findByEmail(email: string): Observable<User[]> {
    return this._httpClient.get(`${this.controller}/find-by-email/${email}`).catch(err => Observable.throw(err));
  }
}
