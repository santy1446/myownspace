import { TestBed } from '@angular/core/testing';

import { SigninUseCase } from './signin.usecase';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { MockCognitoUserGateway } from '../../../../mocks/gateways.mock';
import { MOCK_COGNITO_USER } from './../../../../mocks/mocks';


describe('SigninUseCase', () => {
  let service: SigninUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CognitoUserGateway,
          useClass: MockCognitoUserGateway
        }
      ]
    });
    service = TestBed.inject(SigninUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call signIn', () => {
    const SPY = spyOn(service["_cognitoUserGateway"], "signIn");
    service.signIn(MOCK_COGNITO_USER);
    expect(SPY).toHaveBeenCalled();
  });
});
