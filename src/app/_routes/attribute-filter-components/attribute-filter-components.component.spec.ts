import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeFilterComponentsComponent } from './attribute-filter-components.component';

describe('AttributeFilterComponentsComponent', () => {
  let component: AttributeFilterComponentsComponent;
  let fixture: ComponentFixture<AttributeFilterComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeFilterComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeFilterComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
