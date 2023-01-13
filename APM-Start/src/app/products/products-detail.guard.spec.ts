import { TestBed } from '@angular/core/testing';

import { ProductsDetailGuard } from './products-detail.guard';

describe('ProductsDetailGuard', () => {
  let guard: ProductsDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductsDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
