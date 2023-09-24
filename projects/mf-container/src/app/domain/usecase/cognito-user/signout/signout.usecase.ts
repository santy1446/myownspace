import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../models/cognito-user/gateway/cognito-user.gateway';

@Injectable({
  providedIn: 'root'
})
export class SignoutUseCase {

  constructor(private _cognitoUserGateway: CognitoUserGateway) { }

  signOut(): Observable<any> {
    return this._cognitoUserGateway.signOut();
  }
}
