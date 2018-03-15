import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {User} from "./models/user";
import {ResponseDto} from "./models/response-dto";
import {LoginRequest} from "./models/login-request";

@Injectable()
export class AuthService {

  loginURL = 'http://localhost:8080/login';
  registerURL = 'http://localhost:8080/register';
  logoutURL = 'http://localhost:8080/logout';

  constructor(private http: HttpClient) {
  }

  post(url: string, body: Object, options?: any): Observable<any> {
    options = options || {};
    return this.http.post(url, body, options);
  }

  signIn(loginRequest: LoginRequest): Observable<ResponseDto> {
    return this.post(this.loginURL, loginRequest);
  }

  signUp(user: User): Observable<ResponseDto> {
    return this.post(this.registerURL, user);
  }

  signOut(): Observable<ResponseDto> {
    const token = localStorage.getItem('token');
    localStorage.clear();
    return this.post(this.logoutURL, token);
  }
}
