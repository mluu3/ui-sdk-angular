import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationPivotTableByUriComponent } from './visualization-pivot-table-by-uri.component';

describe('VisualizationPivotTableByUriComponent', () => {
  let component: VisualizationPivotTableByUriComponent;
  let fixture: ComponentFixture<VisualizationPivotTableByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationPivotTableByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationPivotTableByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
