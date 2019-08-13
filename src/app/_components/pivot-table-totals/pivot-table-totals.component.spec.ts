import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotTableTotalsComponent } from './pivot-table-totals.component';

describe('PivotTableTotalsComponent', () => {
  let component: PivotTableTotalsComponent;
  let fixture: ComponentFixture<PivotTableTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotTableTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotTableTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
