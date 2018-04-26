import {Routes} from "@angular/router";
import {RegistrationPageComponent} from "./auth/registration-page/registration-page.component";
import {LoginPageComponent} from "./auth/login-page/login-page.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth/auth.guard";
import {VisitedCountriesComponent} from "./home/country-list/country-list.component";
import {CountryFormComponent} from "./home/country-form/country-form.component";
import {CommentsComponent} from "./home/comments/comments.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/login-page', pathMatch: 'full' },
  {path: 'registration-page', component: RegistrationPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    {path: 'country-form', component: CountryFormComponent},
      {path: 'country-list', component: VisitedCountriesComponent},
  ]},
];

