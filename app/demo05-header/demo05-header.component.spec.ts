import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05HeaderComponent } from './demo05-header.component';

describe('Demo05HeaderComponent', () => {
  let component: Demo05HeaderComponent;
  let fixture: ComponentFixture<Demo05HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo05HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo05HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
