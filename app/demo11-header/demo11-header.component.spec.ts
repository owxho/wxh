import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo11HeaderComponent } from './demo11-header.component';

describe('Demo11HeaderComponent', () => {
  let component: Demo11HeaderComponent;
  let fixture: ComponentFixture<Demo11HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo11HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo11HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
