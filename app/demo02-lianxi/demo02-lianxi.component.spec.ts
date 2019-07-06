import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo02LianxiComponent } from './demo02-lianxi.component';

describe('Demo02LianxiComponent', () => {
  let component: Demo02LianxiComponent;
  let fixture: ComponentFixture<Demo02LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo02LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo02LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
