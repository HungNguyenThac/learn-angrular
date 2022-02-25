import { TestBed } from '@angular/core/testing';

import { AritleService } from './aritle.service';

describe('AritleService', () => {
  let service: AritleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AritleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
