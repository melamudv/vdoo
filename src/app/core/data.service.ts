import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {IResponse} from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = '../assets/';

    constructor(private http: HttpClient) { }

  getData(): Observable<IResponse[]> {
        const url = this.baseUrl + 'api-data.json';
        return this.http.get<IResponse[]>(url)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
