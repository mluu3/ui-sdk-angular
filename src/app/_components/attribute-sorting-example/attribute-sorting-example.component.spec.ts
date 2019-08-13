import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSortingExampleComponent } from './attribute-sorting-example.component';

describe('AttributeSortingExampleComponent', () => {
  let component: AttributeSortingExampleComponent;
  let fixture: ComponentFixture<AttributeSortingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeSortingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSortingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
