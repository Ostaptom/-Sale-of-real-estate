import {Injectable} from '@angular/core';
import {UserDetailsService} from '../service/user-details.service';
import {isNull, isNullOrUndefined} from 'util';
import {Observable} from 'rxjs/Observable';
import {url} from '../config/url';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {basicKey} from '../config/constants';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private _userDetailsService: UserDetailsService) {
  }

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    let headers = this.getHeaders(req);
    req = req.clone({headers, url: url + req.url});
    return next.handle(req).catch(err => {
      if (err.status === 401) {
        this._userDetailsService.logout();
      }
        return Observable.throw(err);
    });
  }

  getHeaders(req: HttpRequest<any>): HttpHeaders {
    let authKey = '';
    let headers = new HttpHeaders();
    let temp: HttpRequest<any>;
    if (isNull(req.headers)) {
      temp = req.clone({headers});
    } else {
      temp = req.clone();
    }
    if (!isNullOrUndefined(this._userDetailsService.getAccessToken()) && this._userDetailsService.getAccessToken() != '') {
      authKey = 'Bearer ' + localStorage.getItem('access_token');
    } else if (req.params.get('grant_type') != null) {
      authKey = `Basic  ${basicKey}`;
      if (temp.headers.keys().indexOf('Content-Type') != -1) {
        if (temp.headers.get('Content-Type').indexOf('application/x-www-form-urlencoded') == -1) {
          headers = headers.set('Content-Type', temp.headers.get('Content-Type') + ';application/x-www-form-urlencoded');
        }
        if (temp.headers.get('Content-Type').indexOf('application/json') == -1) {
          headers = headers.set('Content-Type', temp.headers.get('Content-Type') + ';application/json');
        }
      } else {
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded;application/json');
      }
    }
    if (headers.keys().indexOf('Content-Type') != -1) {
      if (headers.get('Content-Type').indexOf('application/json') == -1) {
        headers = headers.set('Content-Type', temp.headers.get('Content-Type') + ';application/json');
      }
    } else {
      headers = headers.append('Content-Type', 'application/json');
    }
    headers = headers.append('Authorization', authKey);
    headers = headers.append('Accept', 'application/json');
    return headers;
  }
}
