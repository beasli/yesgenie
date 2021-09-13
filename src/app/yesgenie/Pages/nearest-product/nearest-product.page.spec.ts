import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestProductPage } from './nearest-product.page';

describe('NearestProductPage', () => {
  let component: NearestProductPage;
  let fixture: ComponentFixture<NearestProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
