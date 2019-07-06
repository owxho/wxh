import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo15RegisterComponent } from './demo15-register.component';

describe('Demo15RegisterComponent', () => {
  let component: Demo15RegisterComponent;
  let fixture: ComponentFixture<Demo15RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo15RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo15RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
