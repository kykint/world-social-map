import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedCountryComponent } from './visited-country.component';

describe('VisitedCountryComponent', () => {
  let component: VisitedCountryComponent;
  let fixture: ComponentFixture<VisitedCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitedCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
