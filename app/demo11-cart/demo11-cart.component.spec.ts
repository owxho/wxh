import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo11CartComponent } from './demo11-cart.component';

describe('Demo11CartComponent', () => {
  let component: Demo11CartComponent;
  let fixture: ComponentFixture<Demo11CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo11CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo11CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
