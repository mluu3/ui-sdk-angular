import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationColumnChartByUriComponent } from './visualization-column-chart-by-uri.component';

describe('VisualizationColumnChartByUriComponent', () => {
  let component: VisualizationColumnChartByUriComponent;
  let fixture: ComponentFixture<VisualizationColumnChartByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationColumnChartByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationColumnChartByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
