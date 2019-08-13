import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDrillExampleComponent } from './table-drill-example.component';

describe('TableDrillExampleComponent', () => {
  let component: TableDrillExampleComponent;
  let fixture: ComponentFixture<TableDrillExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDrillExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDrillExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
