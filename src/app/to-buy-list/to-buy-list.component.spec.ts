import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBuyListComponent } from './to-buy-list.component';

describe('ToBuyListComponent', () => {
  let component: ToBuyListComponent;
  let fixture: ComponentFixture<ToBuyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToBuyListComponent]
    });
    fixture = TestBed.createComponent(ToBuyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
