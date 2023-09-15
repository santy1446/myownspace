import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';
import { CognitoSessionResponse } from '../../../models/cognito-user/cognito-user.model';

@Injectable({
  providedIn: 'root'
})
export class GetSessionUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  getSession(): Observable<CognitoSessionResponse> {
    return this._cognitoUserGateway.getSession();
  }
}
