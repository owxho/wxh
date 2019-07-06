import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo08PipeComponent } from './demo08-pipe.component';

describe('Demo08PipeComponent', () => {
  let component: Demo08PipeComponent;
  let fixture: ComponentFixture<Demo08PipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo08PipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo08PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
