import { TestBed } from '@angular/core/testing';

import { AuthExceptionInterceptor } from './auth-exception.interceptor';

describe('AuthExceptionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthExceptionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthExceptionInterceptor = TestBed.inject(AuthExceptionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
