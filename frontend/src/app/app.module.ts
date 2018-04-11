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
import { LoginPageComponent } from './auth/login-page/login-page.component';
import {MatButtonToggleModule, MatExpansionModule, MatListModule, MatToolbarModule} from "@angular/material";
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DateValueAccessorModule} from "angular-date-value-accessor";
import { CountryFormComponent } from './home/country-form/country-form.component';
import {VisitedCountriesComponent} from "./home/visited-countries/visited-countries.component";
import { VisitedCountryComponent } from './home/visited-countries/visited-country/visited-country.component';
import {VisitedCountryService} from "./home/services/visited-country/visited-country.service";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    HomeComponent,
    CountryFormComponent,
    VisitedCountriesComponent,
    VisitedCountryComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    DateValueAccessorModule
  ],
  providers: [AuthService, HttpClient, VisitedCountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
