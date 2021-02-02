import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentQtrComponent } from './current-qtr.component';

describe('CurrentQtrComponent', () => {
  let component: CurrentQtrComponent;
  let fixture: ComponentFixture<CurrentQtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentQtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentQtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
