import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {AppComponent} from './app.component';
import {RegistrationPageComponent} from './auth/registration-page/registration-page.component';
import {AuthService} from "./auth/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {
  MatAutocompleteModule, MatButtonToggleModule, MatExpansionModule, MatIconModule, MatListModule,
  MatToolbarModule
} from "@angular/material";
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DateValueAccessorModule} from "angular-date-value-accessor";
import {CountryFormComponent} from './home/country-form/country-form.component';
import {VisitedCountriesComponent} from "./home/country-list/country-list.component";
import {CountryComponent} from './home/country-list/country/country.component';
import {VisitedCountryService} from './home/services/visited-country/visited-country.service';


import {CommentsService} from "./home/comment-list/comments.service";
import {AuthGuard} from "./auth/auth.guard";
import {BackendService} from "./home/backend/backend.service";
import {UserService} from "./home/services/user-service/user.service";
import {CommentComponent} from './home/comment/comment.component';
import {CommentListComponent} from './home/comment-list/comment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    HomeComponent,
    CountryFormComponent,
    VisitedCountriesComponent,
    CountryComponent,
    CommentComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,

    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    DateValueAccessorModule
  ],
  providers: [AuthService, HttpClient, VisitedCountryService, CommentsService, AuthGuard, BackendService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

