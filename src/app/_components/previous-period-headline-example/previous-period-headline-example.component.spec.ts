import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPeriodHeadlineExampleComponent } from './previous-period-headline-example.component';

describe('PreviousPeriodHeadlineExampleComponent', () => {
  let component: PreviousPeriodHeadlineExampleComponent;
  let fixture: ComponentFixture<PreviousPeriodHeadlineExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPeriodHeadlineExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPeriodHeadlineExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
