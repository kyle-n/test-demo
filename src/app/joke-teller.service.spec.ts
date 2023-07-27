import { TestBed } from '@angular/core/testing';

import { JokeTellerService } from './joke-teller.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JokeTellerService', () => {
  let service: JokeTellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JokeTellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
