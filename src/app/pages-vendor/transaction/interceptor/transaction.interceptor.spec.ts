import { TestBed } from '@angular/core/testing';

import { TransactionInterceptor } from './transaction.interceptor';

describe('TransactionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TransactionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TransactionInterceptor = TestBed.inject(TransactionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
