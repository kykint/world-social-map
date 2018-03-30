import { Component, OnInit } from '@angular/core';
import {VisitedCountryDto} from "../dtos/visited-country-dto";
import {BackendService} from "../backend/backend.service";
import {urls} from "../../urls";
import {Router} from "@angular/router";
import {VisitedCountryService} from "../services/visited-country/visited-country.service";
import {AutoUnsubscribe} from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: 'app-visited-countries',
  templateUrl: './visited-countries.component.html',
  styleUrls: ['./visited-countries.component.css']
})
export class VisitedCountriesComponent implements OnInit {

  visitedCountries: VisitedCountryDto[];
  constructor(private backendService: BackendService, private router: Router, private visitedCountryService: VisitedCountryService) { }

  ngOnInit() {
    this.backendService.getDocument(urls.getVisitedCountriesURL)
      .subscribe((visitedCountries: VisitedCountryDto[]) => {
        this.visitedCountries = visitedCountries;
      });
  }

  ngOnDestroy() {}

  navigateToTheForm(){
    this.router.navigate(['visited-country-form']);
    this.visitedCountryService.announceVisitedCountry(null);
  }
}
