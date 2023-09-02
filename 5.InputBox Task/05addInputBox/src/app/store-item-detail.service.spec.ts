import { TestBed } from '@angular/core/testing';

import { StoreItemDetailService } from './store-item-detail.service';

describe('StoreItemDetailService', () => {
  let service: StoreItemDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreItemDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
