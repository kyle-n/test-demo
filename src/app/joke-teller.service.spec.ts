import { TestBed } from '@angular/core/testing';

import { JokeTellerService } from './joke-teller.service';

describe('JokeTellerService', () => {
  let service: JokeTellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeTellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
