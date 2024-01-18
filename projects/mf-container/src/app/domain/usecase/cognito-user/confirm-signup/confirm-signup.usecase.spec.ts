import { MOCK_COGNITO_USER } from './../../../../mocks/mocks';
import { TestBed } from '@angular/core/testing';

import { ConfirmSignupUseCase } from './confirm-signup.usecase';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { MockCognitoUserGateway } from '../../../../mocks/gateways.mock';

describe('ConfirmSignupUseCase', () => {
  let service: ConfirmSignupUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CognitoUserGateway,
          useClass: MockCognitoUserGateway
        }
      ]
    });
    service = TestBed.inject(ConfirmSignupUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call confirmSignUp', () => {
    const SPY = spyOn(service["_cognitoUserGateway"], "confirmSignUp");
    service.confirmSignUp(MOCK_COGNITO_USER);
    expect(SPY).toHaveBeenCalled();
  });
});
