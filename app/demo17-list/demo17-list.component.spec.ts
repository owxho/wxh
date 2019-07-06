import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17ListComponent } from './demo17-list.component';

describe('Demo17ListComponent', () => {
  let component: Demo17ListComponent;
  let fixture: ComponentFixture<Demo17ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
