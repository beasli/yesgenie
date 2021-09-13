import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShippingAddressPage } from './update-shipping-address.page';

describe('UpdateShippingAddressPage', () => {
  let component: UpdateShippingAddressPage;
  let fixture: ComponentFixture<UpdateShippingAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShippingAddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShippingAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
