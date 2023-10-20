import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordSubmitUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  forgotPasswordSubmit(email: string, code: string, password: string): Observable<any> {
    return this._cognitoUserGateway.forgotPasswordSubmit(email, code, password);
  }
}
