import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo04DirComponent } from './demo04-dir.component';

describe('Demo04DirComponent', () => {
  let component: Demo04DirComponent;
  let fixture: ComponentFixture<Demo04DirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo04DirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo04DirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
