import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16ListComponent } from './demo16-list.component';

describe('Demo16ListComponent', () => {
  let component: Demo16ListComponent;
  let fixture: ComponentFixture<Demo16ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
