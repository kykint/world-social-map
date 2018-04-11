import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from '../backend/backend.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {VisitedCountryDto} from '../dtos/visited-country-dto';
import {urls} from '../../urls';
import {CrudOperationDtoInterface} from '../dtos/crud-operation-dto.interface';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {VisitedCountryService} from '../services/visited-country/visited-country.service';
import {COUNTRIES} from '../constants/countries';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@AutoUnsubscribe()
@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit, OnDestroy {

  // @Input() options: VisitedCountryOptions;
  visitedCountry: VisitedCountryDto;

  countryForm: FormGroup;
  filteredCountries: Observable<string[]>;
  response: string;

  constructor(private fb: FormBuilder,
              private backendService: BackendService, private router: Router,
              private visitedCountryService: VisitedCountryService) { }

  ngOnInit() {
    this.countryForm = this.fb.group({
      'countryName': ['', Validators.required],
      'visitedCities': ['', Validators.required],
      'descripion': ['', Validators.required],
      'assessment': ['', Validators.required, Validators.min(1), Validators.max(5)]
    });

    this.visitedCountryService.visitedCountryAnnounced$.subscribe((visitedCountry: VisitedCountryDto) => {
      if (visitedCountry !== null) {
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

  onSubmit() {
    const {countryName, visitedCities, descripion, assessment} = this.countryForm.value;
    const visitedCountry = new VisitedCountryDto(countryName, visitedCities, descripion, assessment);
    if (this.visitedCountry) {
      this.backendService.post(urls.updateVisitedCountryURL, this.visitedCountry)
        .subscribe((crudOperationDto: CrudOperationDtoInterface) => {
          this.response = crudOperationDto.response;
          this.router.navigate(['visited-countries']);
        });
    } else {
      this.backendService.post(urls.addVisitedCountryURL, this.visitedCountry)
        .subscribe((crudOperationDto: CrudOperationDtoInterface) => {
          this.response = crudOperationDto.response;
          this.router.navigate(['visited-countries']);
        });
    }
  }

  filterCountries(name: String): string[] {
    return COUNTRIES
      .filter(country => country.name.toLowerCase().indexOf(name.toLowerCase()) === 0)
      .map(country => country.name);
  }

}
