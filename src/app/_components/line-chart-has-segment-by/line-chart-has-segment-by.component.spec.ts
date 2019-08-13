import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartHasSegmentByComponent } from './line-chart-has-segment-by.component';

describe('LineChartHasSegmentByComponent', () => {
  let component: LineChartHasSegmentByComponent;
  let fixture: ComponentFixture<LineChartHasSegmentByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartHasSegmentByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartHasSegmentByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
