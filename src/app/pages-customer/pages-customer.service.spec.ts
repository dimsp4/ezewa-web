import { TestBed } from '@angular/core/testing';

import { PagesCustomerService } from './pages-customer.service';

describe('PagesCustomerService', () => {
  let service: PagesCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
