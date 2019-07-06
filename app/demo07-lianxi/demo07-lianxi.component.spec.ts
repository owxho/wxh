import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo07LianxiComponent } from './demo07-lianxi.component';

describe('Demo07LianxiComponent', () => {
  let component: Demo07LianxiComponent;
  let fixture: ComponentFixture<Demo07LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo07LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo07LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
