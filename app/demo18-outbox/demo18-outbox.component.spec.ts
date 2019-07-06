import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo18OutboxComponent } from './demo18-outbox.component';

describe('Demo18OutboxComponent', () => {
  let component: Demo18OutboxComponent;
  let fixture: ComponentFixture<Demo18OutboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo18OutboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo18OutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
