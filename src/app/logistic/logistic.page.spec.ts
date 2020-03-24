import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticPage } from './logistic.page';

describe('LogisticPage', () => {
  let component: LogisticPage;
  let fixture: ComponentFixture<LogisticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
