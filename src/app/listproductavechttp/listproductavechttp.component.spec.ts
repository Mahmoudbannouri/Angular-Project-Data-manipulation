import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductavechttpComponent } from './listproductavechttp.component';

describe('ListproductavechttpComponent', () => {
  let component: ListproductavechttpComponent;
  let fixture: ComponentFixture<ListproductavechttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListproductavechttpComponent]
    });
    fixture = TestBed.createComponent(ListproductavechttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
