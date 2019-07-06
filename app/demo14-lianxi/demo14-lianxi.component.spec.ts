import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo14LianxiComponent } from './demo14-lianxi.component';

describe('Demo14LianxiComponent', () => {
  let component: Demo14LianxiComponent;
  let fixture: ComponentFixture<Demo14LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo14LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo14LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
