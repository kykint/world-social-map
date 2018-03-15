import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  private token: string;
  canActivate(): boolean {
    this.token = localStorage.getItem('token');
    return !!this.token;
  }
}
