import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo09ServiceComponent } from './demo09-service.component';

describe('Demo09ServiceComponent', () => {
  let component: Demo09ServiceComponent;
  let fixture: ComponentFixture<Demo09ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo09ServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo09ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
