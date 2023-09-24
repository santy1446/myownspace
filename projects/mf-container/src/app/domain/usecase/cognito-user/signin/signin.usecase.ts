import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { CognitoUser } from '../../../models/cognito-user/cognito-user.model';

@Injectable({
  providedIn: 'root'
})
export class SigninUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  signIn(user : CognitoUser): Observable<any> {
    return this._cognitoUserGateway.signIn(user);
  }
}
