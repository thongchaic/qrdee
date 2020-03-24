import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLogisticPage } from './store-logistic.page';

describe('StoreLogisticPage', () => {
  let component: StoreLogisticPage;
  let fixture: ComponentFixture<StoreLogisticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreLogisticPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLogisticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
