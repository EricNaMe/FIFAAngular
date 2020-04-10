import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubesProComponent } from './clubes-pro.component';

describe('ClubesProComponent', () => {
  let component: ClubesProComponent;
  let fixture: ComponentFixture<ClubesProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubesProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubesProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
