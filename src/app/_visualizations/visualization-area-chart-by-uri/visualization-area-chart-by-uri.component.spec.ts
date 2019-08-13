import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationAreaChartByUriComponent } from './visualization-area-chart-by-uri.component';

describe('VisualizationAreaChartByUriComponent', () => {
  let component: VisualizationAreaChartByUriComponent;
  let fixture: ComponentFixture<VisualizationAreaChartByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationAreaChartByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationAreaChartByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
