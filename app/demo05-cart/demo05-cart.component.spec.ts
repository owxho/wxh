import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05CartComponent } from './demo05-cart.component';

describe('Demo05CartComponent', () => {
  let component: Demo05CartComponent;
  let fixture: ComponentFixture<Demo05CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo05CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo05CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
