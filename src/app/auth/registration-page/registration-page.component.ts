import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../auth.service";
import {User} from "../user";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  signupForm: FormGroup;
  passwordsAreSame = true;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'surename': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'patronymic': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirm': ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log('submit');
    if (this.signupForm.value.password === this.signupForm.value.confirm) {
      this.passwordsAreSame = true;
      const formValue = this.signupForm.value;
      const user: User = new User(formValue.surename, formValue.name, formValue.patronymic, formValue.email, formValue.password);
      this.authService.signUp(user).subscribe(
        res => {
          console.log('yahooo!!!');
          if (res.ok) {
            this.router.navigate(['sign-in']);
          }
        }, err => {
          console.log('error occured');
        }
      );
    } else {
      this.passwordsAreSame = false;
    }
  }
}



