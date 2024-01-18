import { TestBed } from '@angular/core/testing';

import { SignupUseCase } from './signup.usecase';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { MockCognitoUserGateway } from '../../../../mocks/gateways.mock';
import { MOCK_COGNITO_USER } from './../../../../mocks/mocks';


describe('SignupUseCase', () => {
  let service: SignupUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CognitoUserGateway,
          useClass: MockCognitoUserGateway
        }
      ]
    });
    service = TestBed.inject(SignupUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call signUp', () => {
    const SPY = spyOn(service["_cognitoUserGateway"], "signUp");
    service.signUp(MOCK_COGNITO_USER);
    expect(SPY).toHaveBeenCalled();
  });
});
