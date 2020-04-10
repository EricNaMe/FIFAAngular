import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralOptionsComponent } from './lateral-options.component';

describe('LateralOptionsComponent', () => {
  let component: LateralOptionsComponent;
  let fixture: ComponentFixture<LateralOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
