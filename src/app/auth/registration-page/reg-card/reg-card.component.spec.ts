import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegCardComponent} from './reg-card.component';

describe('RegCardComponent', () => {
  let component: RegCardComponent;
  let fixture: ComponentFixture<RegCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
