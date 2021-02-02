import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixMonthComponent } from './six-month.component';

describe('SixMonthComponent', () => {
  let component: SixMonthComponent;
  let fixture: ComponentFixture<SixMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
