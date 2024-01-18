import { TestBed } from '@angular/core/testing';
import { CognitoUserService } from './cognito-user.service';
import { Auth } from "aws-amplify";
import { MOCK_COGNITO_USER } from '../../../mocks/mocks';
import { of } from 'rxjs';

describe('CognitoUserService', () => {
  let service: CognitoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CognitoUserService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call signUp', () => {
    spyOn(Auth as any, 'signUp').and.callFake(() => of(true));
    const result = service.signUp(MOCK_COGNITO_USER);
    expect(result).toBeTruthy();
  });

  it('should call confirmSignUp', () => {
    spyOn(Auth as any, 'confirmSignUp').and.callFake(() => of(true));
    const result = service.confirmSignUp(MOCK_COGNITO_USER);
    expect(result).toBeTruthy();
  });

  it('should call signIn', () => {
    spyOn(Auth as any, 'signIn').and.callFake(() => of(true));
    const result = service.signIn(MOCK_COGNITO_USER);
    expect(result).toBeTruthy();
  });

  it('should call signOut', () => {
    spyOn(Auth as any, 'signOut').and.callFake(() => of(true));
    const result = service.signOut();
    expect(result).toBeTruthy();
  });

  it('should call forgotPassword', () => {
    spyOn(Auth as any, 'forgotPassword').and.callFake(() => of(true));
    const result = service.forgotPassword("email@example.com");
    expect(result).toBeTruthy();
  });

  it('should call forgotPasswordSubmit', () => {
    spyOn(Auth as any, 'forgotPasswordSubmit').and.callFake(() => of(true));
    const result = service.forgotPasswordSubmit("email@example.com", "123", "password");
    expect(result).toBeTruthy();
  });
});
