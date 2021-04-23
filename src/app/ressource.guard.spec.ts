import { TestBed } from '@angular/core/testing';

import { RessourceGuard } from './ressource.guard';

describe('RessourceGuard', () => {
  let guard: RessourceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RessourceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
