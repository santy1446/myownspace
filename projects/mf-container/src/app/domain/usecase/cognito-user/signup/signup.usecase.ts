import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { CognitoUser } from '../../../models/cognito-user/cognito-user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  signUp(user : CognitoUser): Observable<any> {
    return this._cognitoUserGateway.signUp(user);
  }
}
