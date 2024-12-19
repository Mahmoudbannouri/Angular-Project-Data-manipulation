import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementbyresidenceComponent } from './appartementbyresidence.component';

describe('AppartementbyresidenceComponent', () => {
  let component: AppartementbyresidenceComponent;
  let fixture: ComponentFixture<AppartementbyresidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartementbyresidenceComponent]
    });
    fixture = TestBed.createComponent(AppartementbyresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
