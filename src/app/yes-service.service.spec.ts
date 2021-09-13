import { TestBed } from '@angular/core/testing';

import { YesServiceService } from './yes-service.service';

describe('YesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YesServiceService = TestBed.get(YesServiceService);
    expect(service).toBeTruthy();
  });
});
