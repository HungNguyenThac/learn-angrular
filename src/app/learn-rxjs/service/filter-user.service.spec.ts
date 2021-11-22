import { TestBed } from '@angular/core/testing';

import { FilterUserService } from './filter-user.service';

describe('FilterUserService', () => {
  let service: FilterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
