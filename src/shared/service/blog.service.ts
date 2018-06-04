import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../models/blog';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BlogService {

  private controller = '/blog';

  constructor(private _httpClient:HttpClient){}

  save(blog:Blog):Observable<Blog>{
    return this._httpClient.post(`${this.controller}/save`,JSON.stringify(blog)).catch(err => Observable.throw(err));
  }

  findOne(id:number):Observable<Blog>{
    return this._httpClient.get(`${this.controller}/find-one/${id}`).catch(err => Observable.throw(err));
  }

  findAll():Observable<Blog[]>{
    return this._httpClient.get(`${this.controller}/find-all`).catch(err => Observable.throw(err));
  }
}
