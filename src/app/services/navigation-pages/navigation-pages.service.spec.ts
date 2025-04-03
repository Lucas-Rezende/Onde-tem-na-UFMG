import { TestBed } from '@angular/core/testing';

import { NavigationPagesService } from './navigation-pages.service';

describe('NavigationPagesService', () => {
  let service: NavigationPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
