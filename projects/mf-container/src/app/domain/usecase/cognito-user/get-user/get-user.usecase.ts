import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { UserSessionDataResponse } from '../../../models/cognito-user/cognito-user.model';

@Injectable({
  providedIn: 'root'
})
export class GetUserUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  getUser(): Observable<UserSessionDataResponse> {
    return this._cognitoUserGateway.getUser();
  }
}
