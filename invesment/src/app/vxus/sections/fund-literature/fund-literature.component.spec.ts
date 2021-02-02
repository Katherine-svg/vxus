import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundLiteratureComponent } from './fund-literature.component';

describe('FundLiteratureComponent', () => {
  let component: FundLiteratureComponent;
  let fixture: ComponentFixture<FundLiteratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundLiteratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
