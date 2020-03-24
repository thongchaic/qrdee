import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellStatsPage } from './sell-stats.page';

describe('SellStatsPage', () => {
  let component: SellStatsPage;
  let fixture: ComponentFixture<SellStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellStatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
