import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotTableComponentsComponent } from './pivot-table-components.component';

describe('PivotTableComponentsComponent', () => {
  let component: PivotTableComponentsComponent;
  let fixture: ComponentFixture<PivotTableComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotTableComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotTableComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
