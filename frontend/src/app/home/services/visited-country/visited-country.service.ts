import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {VisitedCountryDto} from "../../dtos/visited-country-dto";

@Injectable()
export class VisitedCountryService {

  private visitedCountryAnnouncedSource = new Subject<VisitedCountryDto>();
  // private visitedCountryConfirmedSource = new Subject<string>();

  readonly visitedCountryAnnounced$ = this.visitedCountryAnnouncedSource.asObservable();
  // visitedCountryConfirmed$ = this.visitedCountryConfirmedSource.asObservable();

  announceVisitedCountry(visitedCountry: VisitedCountryDto) {
    this.visitedCountryAnnouncedSource.next(visitedCountry);
  }

}
