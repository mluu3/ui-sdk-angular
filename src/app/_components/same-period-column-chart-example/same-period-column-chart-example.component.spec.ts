import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamePeriodColumnChartExampleComponent } from './same-period-column-chart-example.component';

describe('SamePeriodColumnChartExampleComponent', () => {
  let component: SamePeriodColumnChartExampleComponent;
  let fixture: ComponentFixture<SamePeriodColumnChartExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamePeriodColumnChartExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamePeriodColumnChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
