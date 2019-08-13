import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureSortingExampleComponent } from './measure-sorting-example.component';

describe('MeasureSortingExampleComponent', () => {
  let component: MeasureSortingExampleComponent;
  let fixture: ComponentFixture<MeasureSortingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasureSortingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureSortingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
