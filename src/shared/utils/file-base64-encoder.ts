import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/empty';

export const MAX_UPLOAD_SIZE = 1000000000000000000000000000000000000000000000000000000000000;
export const BYTE_IN_MB = 1000000;

export function FILE_BASE64(file: File): Observable<string> {
  if (file.size < MAX_UPLOAD_SIZE) {
    let reader = new FileReader();
    let result = new Subject<string>();
    reader.readAsDataURL(file);
    reader.onload = () => {
      result.next(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    return result.asObservable();
  } else {
    alert('out max size file:[' + file.name + ']max size is:[' + (MAX_UPLOAD_SIZE / BYTE_IN_MB).toFixed(2) + 'mb]file size is:[' + (file.size / BYTE_IN_MB).toFixed(2) + 'mb]');
    return Observable.empty();
  }
}
