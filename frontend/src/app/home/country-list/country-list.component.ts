import {Component, Input, OnInit} from '@angular/core';
import {VisitedCountryDto} from "../dtos/visited-country-dto";
import {BackendService} from "../backend/backend.service";
import {urls} from "../../urls";
import {Router} from "@angular/router";
import {VisitedCountryService} from "../services/visited-country/visited-country.service";
import {AutoUnsubscribe} from "ngx-auto-unsubscribe";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";

@AutoUnsubscribe()
@Component({
  selector: 'app-visited-countries',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class VisitedCountriesComponent implements OnInit {

  @Input() type;
  visitedCountries: VisitedCountryDto[];
  constructor(private backendService: BackendService, private router: Router,
              private visitedCountryService: VisitedCountryService){}

  ngOnInit() {
    this.backendService.getDocument(urls.getVisitedCountriesURL, {type: this.type})
      .subscribe((visitedCountries: VisitedCountryDto[]) => {
        this.visitedCountries = visitedCountries;
      });


  }

  ngOnDestroy() {}

  navigateToTheForm(){
    this.router.navigate(['country-form']);
    this.visitedCountryService.announceVisitedCountry(null);
  }
}
