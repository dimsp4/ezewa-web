import { TestBed } from '@angular/core/testing';

import { BuildingInterceptorInterceptor } from './building-interceptor.interceptor';

describe('BuildingInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BuildingInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BuildingInterceptorInterceptor = TestBed.inject(BuildingInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
