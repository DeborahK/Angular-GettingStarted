import { ProductModule } from './product.module';

describe('ProductModule', () => {
  let productModule: ProductModule;

  beforeEach(() => {
    productModule = new ProductModule();
  });

  it('should create an instance', () => {
    expect(productModule).toBeTruthy();
  });
});
