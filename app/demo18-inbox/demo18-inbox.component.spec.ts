import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo18InboxComponent } from './demo18-inbox.component';

describe('Demo18InboxComponent', () => {
  let component: Demo18InboxComponent;
  let fixture: ComponentFixture<Demo18InboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo18InboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo18InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
