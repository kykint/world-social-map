import {Component, Input, OnInit} from '@angular/core';
import {VisitedCountryDto} from "../../dtos/visited-country-dto";
import {Router} from "@angular/router";
import {VisitedCountryService} from "../../services/visited-country/visited-country.service";
import {urls} from "../../../urls";
import {BackendService} from "../../backend/backend.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() visitedCountry: VisitedCountryDto;
  panelOpenState: boolean = false;

  constructor(private router: Router,
              private visitedCountryService: VisitedCountryService,
              private backendService: BackendService, iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_clear_black_24px.svg'));
  }

  ngOnInit() {
  }

  deleteCountry(visitedCountry) {
    this.backendService.post(urls.removeVisitedCountryURL, visitedCountry)
  }

  navigateToEditForm() {
    this.router.navigate(['country-form']);
    this.visitedCountryService.announceVisitedCountry(this.visitedCountry);
  }
}
