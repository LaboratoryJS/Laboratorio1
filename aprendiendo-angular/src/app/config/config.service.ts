import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

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
  public url:string;

    constructor(private http:HttpClient){
      this.url = 'https://reqres.in/';
    }

    async getUser(userid:any):Promise<Observable<any>>{
      return await this.http.get(this.url+'api/users/'+userid)
        .pipe(
          retry(3),
          catchError(this.handleError)
        )
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
}
