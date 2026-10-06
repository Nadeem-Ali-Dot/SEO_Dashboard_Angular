import { TestBed } from '@angular/core/testing';

import { AboutSection } from './about-section';

describe('AboutSection', () => {
  let service: AboutSection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutSection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
