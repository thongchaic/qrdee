import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLogisticPage } from './register-logistic.page';

describe('RegisterLogisticPage', () => {
  let component: RegisterLogisticPage;
  let fixture: ComponentFixture<RegisterLogisticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterLogisticPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLogisticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
