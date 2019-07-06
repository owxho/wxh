import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo03DirectiveComponent } from './demo03-directive.component';

describe('Demo03DirectiveComponent', () => {
  let component: Demo03DirectiveComponent;
  let fixture: ComponentFixture<Demo03DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo03DirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo03DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
