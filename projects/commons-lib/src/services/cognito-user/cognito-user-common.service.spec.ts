import { TestBed } from '@angular/core/testing';

import { CognitoUserCommonService } from './cognito-user-common.service';

describe('CognitoUserCommonService', () => {
  let service: CognitoUserCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CognitoUserCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
