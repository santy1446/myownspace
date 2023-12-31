import { environment } from './../../../../environments/environments';
import { Injectable } from '@angular/core';
import { CognitoUserGateway } from '../../../domain/models/cognito-user/gateway/cognito-user.gateway';
import { Observable } from 'rxjs';
import { CognitoUser } from '../../../domain/models/cognito-user/cognito-user.model';
import { Amplify, Auth } from 'aws-amplify';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CognitoUserService extends CognitoUserGateway {

  constructor() {
    super();
    Amplify.configure({
      Auth: environment.cognito
    })
  }

  signUp(user: CognitoUser): Observable<any> {
    const OBSERVABLE = from(Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        nickname: user.user, // optional
      },
    },));
    return OBSERVABLE;
  }

  confirmSignUp(user: CognitoUser): Observable<any> {
    const OBSERVABLE = from(Auth.confirmSignUp(
      user.email, user.code!.toString()
    ));
    return OBSERVABLE;
  }
  signIn(user: CognitoUser): Observable<any> {
    const OBSERVABLE = from(Auth.signIn(
      user.user!, user.password
    ));
    return OBSERVABLE;
  }
  signOut(): Observable<any> {
    const OBSERVABLE = from(Auth.signOut());
    return OBSERVABLE;
  }

  forgotPassword(user: CognitoUser): Observable<any> {
    const OBSERVABLE = from(Auth.forgotPassword(user.email));
    return OBSERVABLE;
  }

  forgotPasswordSubmit(user: CognitoUser): Observable<any> {
    const OBSERVABLE = from(Auth.forgotPasswordSubmit(
      user.email,
      user.code!.toString(),
      user.password
    ));
    return OBSERVABLE;
  }

}
