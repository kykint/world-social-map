import {Routes} from "@angular/router";
import {RegistrationPageComponent} from "./auth/registration-page/registration-page.component";
import {LoginPageComponent} from "./auth/login-page/login-page.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth/auth.guard";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/login-page', pathMatch: 'full' },
  {path: 'registration-page', component: RegistrationPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

