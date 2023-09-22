import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CognitoUserCommonService {

  constructor() {
    Amplify.configure({
      Auth: environment.cognito
    })
  }

  getUser(): Observable<any> {
    const OBSERVABLE = from(Auth.currentUserInfo());
    return OBSERVABLE;
  }
  getSession(): Observable<any> {
    const OBSERVABLE = from(Auth.currentSession());
    return OBSERVABLE;
  }
}
