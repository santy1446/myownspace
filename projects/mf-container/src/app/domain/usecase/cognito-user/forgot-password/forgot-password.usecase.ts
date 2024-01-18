import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  forgotPassword(email: string): Observable<any> {
    return this._cognitoUserGateway.forgotPassword(email);
  }
}
