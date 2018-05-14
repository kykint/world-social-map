import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {User} from "./models/user";
import {ResponseDto} from "./models/response-dto";
import {LoginRequest} from "./models/login-request";
import {urls} from "../urls";

@Injectable()
export class AuthService {

  // loginURL = 'http://localhost:8080/login';
  // registerURL = 'http://localhost:8080/register';
  // logoutURL = 'http://localhost:8080/logout';
  constructor(private http: HttpClient) {
  }

  post(url: string, body: Object, options?: any): Observable<any> {
    options = options || {};
    return this.http.post(url, body, options);
  }

  signIn(loginRequest: LoginRequest): Observable<ResponseDto> {
    return this.post(urls.loginURL, loginRequest);
  }

  signUp(user: User): Observable<ResponseDto> {
    return this.post(urls.registerURL, user);
  }

  signOut(): Observable<ResponseDto> {
    const token = localStorage.getItem('token');
    localStorage.clear();
    return this.post(urls.logoutURL, token);
  }

  getUser() {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token'
    //   })

    return this.http.get('http://localhost:8080/user')
  }
}
