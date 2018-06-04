import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Flat} from '../models/flat';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Injectable} from '@angular/core';

@Injectable()
export class FlatService {
  private controller = '/flat';

  constructor(private _httpClient: HttpClient) {
  }

  save(flat: Flat): Observable<Flat> {
    return this._httpClient.post(`${this.controller}/save`, JSON.stringify(flat)).catch(err => Observable.throw(err));
  }

  findOne(id: number): Observable<Flat> {
    return this._httpClient.get(`${this.controller}/find-one/${id}`).catch(err => Observable.throw(err));
  }

  findAll(): Observable<Flat[]> {
    return this._httpClient.get(`${this.controller}/find-all`).catch(err => Observable.throw(err));
  }
}
