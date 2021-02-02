import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QoneComponent } from './qone.component';

describe('QoneComponent', () => {
  let component: QoneComponent;
  let fixture: ComponentFixture<QoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
