import { TestBed, async, inject } from '@angular/core/testing';

import { ProductsDetailGuard } from './products-detail.guard';

describe('ProductsDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsDetailGuard]
    });
  });

  it('should ...', inject([ProductsDetailGuard], (guard: ProductsDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
