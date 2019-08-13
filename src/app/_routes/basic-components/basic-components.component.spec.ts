import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponentsComponent } from './basic-components.component';

describe('BasicComponentsComponent', () => {
  let component: BasicComponentsComponent;
  let fixture: ComponentFixture<BasicComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
