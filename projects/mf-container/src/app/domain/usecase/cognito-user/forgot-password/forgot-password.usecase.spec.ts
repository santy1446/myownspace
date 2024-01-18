import { TestBed } from '@angular/core/testing';

import { ForgotPasswordUseCase } from './forgot-password.usecase';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { MockCognitoUserGateway } from '../../../../mocks/gateways.mock';

describe('ForgotPasswordUseCase', () => {
  let service: ForgotPasswordUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CognitoUserGateway,
          useClass: MockCognitoUserGateway
        }
      ]
    });
    service = TestBed.inject(ForgotPasswordUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call forgotPassword', () => {
    const SPY = spyOn(service["_cognitoUserGateway"], "forgotPassword");
    service.forgotPassword("email");
    expect(SPY).toHaveBeenCalled();
  });
});
