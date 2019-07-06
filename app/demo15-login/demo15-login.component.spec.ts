import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo15LoginComponent } from './demo15-login.component';

describe('Demo15LoginComponent', () => {
  let component: Demo15LoginComponent;
  let fixture: ComponentFixture<Demo15LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo15LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo15LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
