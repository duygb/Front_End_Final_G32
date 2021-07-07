import { TestBed } from '@angular/core/testing';

import { MyServiceHttpService } from './my-service-http.service';

describe('MyServiceHttpService', () => {
  let service: MyServiceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
