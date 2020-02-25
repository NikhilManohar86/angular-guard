import { TestBed } from '@angular/core/testing';

import { EmployeeResolveService } from './employee-resolve.service';

describe('EmployeeResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeResolveService = TestBed.get(EmployeeResolveService);
    expect(service).toBeTruthy();
  });
});
