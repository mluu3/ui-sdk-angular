import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationComponentsComponent } from './visualization-components.component';

describe('VisualizationComponentsComponent', () => {
  let component: VisualizationComponentsComponent;
  let fixture: ComponentFixture<VisualizationComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
