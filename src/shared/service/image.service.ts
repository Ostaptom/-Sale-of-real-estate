import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Image} from '../models/image';

@Injectable()
export class ImageService {
  private controller = '/image';

  constructor(private _httpClient: HttpClient) {
  }

  save(image: string, id:number): Observable<Image> {
    return this._httpClient.post(`${this.controller}/save/${id}`, image, {headers: new HttpHeaders().append('Content-Type', 'text/plain')}).catch(err => Observable.throw(err));
  }

  findOne(id: number): Observable<Image> {
    return this._httpClient.get(`${this.controller}/find-one/${id}`).catch(err => Observable.throw(err));
  }

  getImage(id: number): Observable<string> {
    return this._httpClient.get(`${this.controller}/source/${id}`, {responseType: 'text'}).catch(err => Observable.throw(err));
  }
}
