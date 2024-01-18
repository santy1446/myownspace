import { TestBed } from '@angular/core/testing';

import { ForgotPasswordSubmitUseCase } from './forgot-password-submit.usecase';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { MockCognitoUserGateway } from '../../../../mocks/gateways.mock';

describe('ForgotPasswordSubmitUseCase', () => {
  let service: ForgotPasswordSubmitUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CognitoUserGateway,
          useClass: MockCognitoUserGateway
        }
      ]
    });
    service = TestBed.inject(ForgotPasswordSubmitUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call forgotPasswordSubmit', () => {
    const SPY = spyOn(service["_cognitoUserGateway"], "forgotPasswordSubmit");
    service.forgotPasswordSubmit("email", "code", "password");
    expect(SPY).toHaveBeenCalled();
  });
});
