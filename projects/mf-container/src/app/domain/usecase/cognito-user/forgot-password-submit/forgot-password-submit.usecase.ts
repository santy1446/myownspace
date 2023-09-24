import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { CognitoUser } from '../../../models/cognito-user/cognito-user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordSubmitUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  forgotPasswordSubmit(user : CognitoUser): Observable<any> {
    return this._cognitoUserGateway.forgotPasswordSubmit(user);
  }
}
