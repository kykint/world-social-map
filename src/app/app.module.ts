import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {AppComponent} from './app.component';
import {RegistrationPageComponent} from './auth/registration-page/registration-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material";
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {AuthService} from "./auth/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: 'registration-page', component: RegistrationPageComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}),// <-- debugging purposes only and
  ],
  providers: [
    RegistrationPageComponent,
    AuthService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

