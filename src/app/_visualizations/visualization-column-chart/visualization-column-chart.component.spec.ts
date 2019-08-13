import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationColumnChartComponent } from './visualization-column-chart.component';

describe('VisualizationColumnChartComponent', () => {
  let component: VisualizationColumnChartComponent;
  let fixture: ComponentFixture<VisualizationColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationColumnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
