import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { CognitoUser } from '../../../models/cognito-user/cognito-user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  forgotPassword(user : CognitoUser): Observable<any> {
    return this._cognitoUserGateway.forgotPassword(user);
  }
}
