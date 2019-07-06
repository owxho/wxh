import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo18MailComponent } from './demo18-mail.component';

describe('Demo18MailComponent', () => {
  let component: Demo18MailComponent;
  let fixture: ComponentFixture<Demo18MailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo18MailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo18MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
