import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRequestPage } from './quote-request.page';

describe('QuoteRequestPage', () => {
  let component: QuoteRequestPage;
  let fixture: ComponentFixture<QuoteRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
