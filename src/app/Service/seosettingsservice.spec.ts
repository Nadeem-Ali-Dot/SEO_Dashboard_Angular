import { TestBed } from '@angular/core/testing';

import { SEOSettingsservice } from './seosettingsservice';

describe('SEOSettingsservice', () => {
  let service: SEOSettingsservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEOSettingsservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
