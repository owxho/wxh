import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo12ItemComponent } from './demo12-item.component';

describe('Demo12ItemComponent', () => {
  let component: Demo12ItemComponent;
  let fixture: ComponentFixture<Demo12ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo12ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
