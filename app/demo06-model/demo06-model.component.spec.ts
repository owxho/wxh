import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo06ModelComponent } from './demo06-model.component';

describe('Demo06ModelComponent', () => {
  let component: Demo06ModelComponent;
  let fixture: ComponentFixture<Demo06ModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo06ModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo06ModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
