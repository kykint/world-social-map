import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  public getDocument(url: string, params?): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(url, {headers: {token: token},  params: params});
  }

  public post(url: string, body: Object, options?: any): Observable<any> {
    options = options || {};
    return this.http.post(url, body, options);
  }
}
