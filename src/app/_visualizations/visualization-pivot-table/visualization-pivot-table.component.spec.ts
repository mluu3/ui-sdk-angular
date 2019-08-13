import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationPivotTableComponent } from './visualization-pivot-table.component';

describe('VisualizationPivotTableComponent', () => {
  let component: VisualizationPivotTableComponent;
  let fixture: ComponentFixture<VisualizationPivotTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationPivotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationPivotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
