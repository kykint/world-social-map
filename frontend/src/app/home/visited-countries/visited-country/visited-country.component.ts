import {Component, Input, OnInit} from '@angular/core';
import {VisitedCountryDto} from "../../dtos/visited-country-dto";
import {Router} from "@angular/router";
import {VisitedCountryService} from "../../services/visited-country/visited-country.service";

@Component({
  selector: 'app-visited-country',
  templateUrl: './visited-country.component.html',
  styleUrls: ['./visited-country.component.css']
})
export class VisitedCountryComponent implements OnInit {

  @Input() visitedCountry: VisitedCountryDto;
  panelOpenState: boolean = false;

  constructor(private router: Router, private visitedCountryService: VisitedCountryService) {
  }

  ngOnInit() {
  }

  navigateToEditForm() {
    this.router.navigate(['visited-country-form']);
    this.visitedCountryService.announceVisitedCountry(this.visitedCountry);
  }
}
