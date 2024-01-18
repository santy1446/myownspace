import { TestBed } from '@angular/core/testing';

import { SignoutUseCase } from './signout.usecase';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { MockCognitoUserGateway } from '../../../../mocks/gateways.mock';

describe('SignoutUseCase', () => {
  let service: SignoutUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CognitoUserGateway,
          useClass: MockCognitoUserGateway
        }
      ]
    });
    service = TestBed.inject(SignoutUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call signOut', () => {
    const SPY = spyOn(service["_cognitoUserGateway"], "signOut");
    service.signOut();
    expect(SPY).toHaveBeenCalled();
  });
});
