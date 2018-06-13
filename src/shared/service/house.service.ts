import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {House} from '../models/house';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HouseService {

  private controller = '/house';

  constructor(private _httpClient: HttpClient) {
  }

  save(house: House): Observable<House> {
    return this._httpClient.post(`${this.controller}/save`, JSON.stringify(house)).catch(err => Observable.throw(err));
  }

  findTop(): Observable<House[]> {
    return this._httpClient.get(`${this.controller}/find-by-data`).catch(err => Observable.throw(err));
  }

  findAll(): Observable<House[]> {
    return this._httpClient.get(`${this.controller}/find-all`).catch(err => Observable.throw(err));
  }

  findOne(id: number): Observable<House> {
    return this._httpClient.get(`${this.controller}/find-one/${id}`).catch(err => Observable.throw(err));
  }

  getImage(id:number):Observable<string>{
    return this._httpClient.get(`${this.controller}/image/${id}`,{responseType:'text'}).catch(err => Observable.throw(err));
  }

  addImage(id:number, image:string):Observable<House> {
    return this._httpClient.post(`${this.controller}/image/${id}`,image,{headers:new HttpHeaders().append('Content-Type','text/plain')}).catch(err => Observable.throw(err));
  }

  searchResult(price:number,priceOfOneSpace:number,countRoom:number,space:number,houseName:string) {
    return this._httpClient.get(`${this.controller}/filter`,{params: new HttpParams().set("price",price+"").set("priceOfOneSpace",priceOfOneSpace+"").set("countRoom",countRoom+"").set("space",space+"")
        .set("houseName",houseName)}).catch(err => Observable.throw(err));
  }

}
