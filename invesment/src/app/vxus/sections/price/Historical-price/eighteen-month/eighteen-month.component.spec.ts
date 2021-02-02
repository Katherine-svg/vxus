import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EighteenMonthComponent } from './eighteen-month.component';

describe('EighteenMonthComponent', () => {
  let component: EighteenMonthComponent;
  let fixture: ComponentFixture<EighteenMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EighteenMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EighteenMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
