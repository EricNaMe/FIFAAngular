import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTopComponent } from './tabla-top.component';

describe('TablaTopComponent', () => {
  let component: TablaTopComponent;
  let fixture: ComponentFixture<TablaTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
