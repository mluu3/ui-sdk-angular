import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPeriodColumnChartExampleComponent } from './previous-period-column-chart-example.component';

describe('PreviousPeriodColumnChartExampleComponent', () => {
  let component: PreviousPeriodColumnChartExampleComponent;
  let fixture: ComponentFixture<PreviousPeriodColumnChartExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPeriodColumnChartExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPeriodColumnChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
