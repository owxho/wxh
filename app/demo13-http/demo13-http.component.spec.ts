import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13HttpComponent } from './demo13-http.component';

describe('Demo13HttpComponent', () => {
  let component: Demo13HttpComponent;
  let fixture: ComponentFixture<Demo13HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
