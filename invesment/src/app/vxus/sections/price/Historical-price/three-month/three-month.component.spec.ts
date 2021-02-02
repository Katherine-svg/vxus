import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeMonthComponent } from './three-month.component';

describe('ThreeMonthComponent', () => {
  let component: ThreeMonthComponent;
  let fixture: ComponentFixture<ThreeMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
