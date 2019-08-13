import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeFilterExample2Component } from './attribute-filter-example2.component';

describe('AttributeFilterExample2Component', () => {
  let component: AttributeFilterExample2Component;
  let fixture: ComponentFixture<AttributeFilterExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeFilterExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeFilterExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
