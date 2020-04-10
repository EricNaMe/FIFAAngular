import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvspComponent } from './pvsp.component';

describe('PvspComponent', () => {
  let component: PvspComponent;
  let fixture: ComponentFixture<PvspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
