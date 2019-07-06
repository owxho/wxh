import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17CheckComponent } from './demo17-check.component';

describe('Demo17CheckComponent', () => {
  let component: Demo17CheckComponent;
  let fixture: ComponentFixture<Demo17CheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17CheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17CheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
