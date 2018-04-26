import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from "../backend/backend.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VisitedCountryOptions} from "../models/visited-country-options";
import {VisitedCountryDto} from "../dtos/visited-country-dto";
import {urls} from "../../urls";
import {CrudOperationDtoInterface} from "../dtos/crud-operation-dto.interface";
import {AutoUnsubscribe} from "ngx-auto-unsubscribe";
import {VisitedCountryService} from "../services/visited-country/visited-country.service";
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {COUNTRIES} from '../constants/countries';

@AutoUnsubscribe()
@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit, OnDestroy {

  // @Input() options: VisitedCountryOptions;
  visitedCountry: VisitedCountryDto;
  filteredCountries: Observable<string[]>;
  countryForm: FormGroup;
  response: string;

  constructor(private fb: FormBuilder, private backendService: BackendService, private router: Router, private visitedCountryService: VisitedCountryService) { }

  ngOnInit() {
    const assessment = new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]);
    this.countryForm = this.fb.group({
      'countryName': ['', Validators.required],
      'visitedCities': ['', Validators.required],
      'descripion': ['', Validators.required],
      'assessment': assessment
    });

    this.visitedCountryService.visitedCountryAnnounced$.subscribe((visitedCountry: VisitedCountryDto) => {
      if(visitedCountry !== null) {
        this.visitedCountry = visitedCountry;
        this.countryForm.setValue({
          'countryName': this.visitedCountry.countryName,
          'visitedCities': this.visitedCountry.visitedCities,
          'descripion': this.visitedCountry.descripion,
          'assessment': this.visitedCountry.assessment
        });
      }
    });

    this.filteredCountries = this.countryForm.controls['countryName'].valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this.filterCountries(country) : [])
      );
  }

  ngOnDestroy(){}

  onSubmit(){
    const {countryName, visitedCities, descripion, assessment} = this.countryForm.value;
    const visitedCountry = new VisitedCountryDto(countryName, visitedCities, descripion, assessment);
    if(this.visitedCountry){
      this.backendService.post(urls.updateVisitedCountryURL, this.visitedCountry)
        .subscribe((crudOperationDto: CrudOperationDtoInterface) => {
          this.response = crudOperationDto.response;
          this.router.navigate(['country-list']);
        });
    } else {
      this.backendService.post(urls.addVisitedCountryURL, this.visitedCountry)
        .subscribe((crudOperationDto: CrudOperationDtoInterface) => {
          this.response = crudOperationDto.response;
          this.router.navigate(['country-list']);
        });
    }
  }

  filterCountries(name: String): string[] {
    return COUNTRIES
      .filter(country => country.name.toLowerCase().indexOf(name.toLowerCase()) === 0)
      .map(country => country.name);
  }

}
