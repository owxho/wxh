import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16DetailComponent } from './demo16-detail.component';

describe('Demo16DetailComponent', () => {
  let component: Demo16DetailComponent;
  let fixture: ComponentFixture<Demo16DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
