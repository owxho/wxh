import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10ListComponent } from './demo10-list.component';

describe('Demo10ListComponent', () => {
  let component: Demo10ListComponent;
  let fixture: ComponentFixture<Demo10ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo10ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
