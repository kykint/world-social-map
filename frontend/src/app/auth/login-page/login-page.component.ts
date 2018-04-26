import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {AutoUnsubscribe} from "ngx-auto-unsubscribe";
import {LoginRequest} from "../models/login-request";

@AutoUnsubscribe()
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isAuthorized = false;

  constructor(private fb: FormBuilder, private loginService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': '',
      'password': ''
    });
  }

  onSubmit() {
    const {username, password} = this.loginForm.value;
    const loginRequest = new LoginRequest(username, password);
    this.loginService.signIn(loginRequest).subscribe(
      res => {
        if (res.ok) {
          localStorage.setItem('token', res.token);
          this.isAuthorized = true;
          this.router.navigate(['home']);
        }
      }, err => {
        console.log('error occured');
      }
    );
  }

  ngOnDestroy(){}

}
