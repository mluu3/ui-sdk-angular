import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeFilterExampleComponent } from './attribute-filter-example.component';

describe('AttributeFilterExampleComponent', () => {
  let component: AttributeFilterExampleComponent;
  let fixture: ComponentFixture<AttributeFilterExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeFilterExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeFilterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
