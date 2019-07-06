import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10OrdComponent } from './demo10-ord.component';

describe('Demo10OrdComponent', () => {
  let component: Demo10OrdComponent;
  let fixture: ComponentFixture<Demo10OrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10OrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo10OrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
