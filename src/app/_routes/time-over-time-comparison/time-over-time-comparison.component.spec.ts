import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOverTimeComparisonComponent } from './time-over-time-comparison.component';

describe('TimeOverTimeComparisonComponent', () => {
  let component: TimeOverTimeComparisonComponent;
  let fixture: ComponentFixture<TimeOverTimeComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOverTimeComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOverTimeComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
