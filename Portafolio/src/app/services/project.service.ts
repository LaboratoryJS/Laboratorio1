import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Project } from '../models/project';
import { Global } from './global'

@Injectable()
export class ProjecService{
  public url:string = Global.url;

  constructor(
    private _http:HttpClient
  ){
    this.url = Global.url;
  }

  testService(){
    return 'Probando el servicio de Angular';
  }
  saveProject(project:Project):Observable<Project>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post<Project>(`${this.url}project`,params,{headers});
  }
}
