import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationLineChartComponent } from './visualization-line-chart.component';

describe('VisualizationLineChartComponent', () => {
  let component: VisualizationLineChartComponent;
  let fixture: ComponentFixture<VisualizationLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
