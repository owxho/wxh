import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo12ListComponent } from './demo12-list.component';

describe('Demo12ListComponent', () => {
  let component: Demo12ListComponent;
  let fixture: ComponentFixture<Demo12ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo12ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
