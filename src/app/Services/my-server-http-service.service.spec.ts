import { TestBed } from '@angular/core/testing';
import { MyServerHttpService } from './my-server-http-service.service';


describe('MyServerHttpServiceService', () => {
  let service: MyServerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
