import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualColumnChartComponent } from './dual-column-chart.component';

describe('DualColumnChartComponent', () => {
  let component: DualColumnChartComponent;
  let fixture: ComponentFixture<DualColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualColumnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
