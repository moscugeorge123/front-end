import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingService', () => {
  let service: AppRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRoutingModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
