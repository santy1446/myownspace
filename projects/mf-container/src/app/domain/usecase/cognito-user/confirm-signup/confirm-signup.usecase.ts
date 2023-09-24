import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { Observable } from 'rxjs';
import { CognitoUser } from '../../../models/cognito-user/cognito-user.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmSignupUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  confirmSignUp(user : CognitoUser) : Observable <any> {
    return this._cognitoUserGateway.confirmSignUp(user);
  }
}
