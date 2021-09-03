import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
} 

@Injectable()
export class ConfigServices{
    url = 'https://fakestoreapi.com/users';
    constructor(private http:HttpClient){}

    GetAll(){
        return this.http.get<Config>(this.url)
        .pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
          this.url, { observe: 'response' });
      }
    
      private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
    
      makeIntentionalError() {
        return this.http.get('not/a/real/url')
          .pipe(
            catchError(this.handleError)
          );
      }
}