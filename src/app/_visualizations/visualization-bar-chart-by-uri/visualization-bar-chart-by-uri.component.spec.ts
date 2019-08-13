import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationBarChartByUriComponent } from './visualization-bar-chart-by-uri.component';

describe('VisualizationBarChartByUriComponent', () => {
  let component: VisualizationBarChartByUriComponent;
  let fixture: ComponentFixture<VisualizationBarChartByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationBarChartByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationBarChartByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
