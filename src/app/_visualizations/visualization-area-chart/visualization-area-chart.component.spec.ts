import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationAreaChartComponent } from './visualization-area-chart.component';

describe('VisualizationAreaChartComponent', () => {
  let component: VisualizationAreaChartComponent;
  let fixture: ComponentFixture<VisualizationAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
