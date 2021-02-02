import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveMonthComponent } from './twelve-month.component';

describe('TwelveMonthComponent', () => {
  let component: TwelveMonthComponent;
  let fixture: ComponentFixture<TwelveMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelveMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
