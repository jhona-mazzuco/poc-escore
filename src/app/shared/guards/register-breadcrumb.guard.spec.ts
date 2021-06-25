import { TestBed } from '@angular/core/testing';

import { RegisterBreadcrumbGuard } from './register-breadcrumb.guard';

describe('RegisterBreadcrumbGuard', () => {
  let guard: RegisterBreadcrumbGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegisterBreadcrumbGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
