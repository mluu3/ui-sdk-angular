import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationBarChartComponent } from './visualization-bar-chart.component';

describe('VisualizationBarChartComponent', () => {
  let component: VisualizationBarChartComponent;
  let fixture: ComponentFixture<VisualizationBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
