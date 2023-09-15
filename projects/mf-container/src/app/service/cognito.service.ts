import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { environment } from '../../environments/environments';
import { User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor() { 
    Amplify.configure({
      Auth: environment.cognito
    })
  }

  signUp(user: User | undefined): Promise<any> {
    return Auth.signUp({
      username: user!.email,
      password: user!.password
    },);
  }

  confirmSignUp(user: User | undefined): Promise<any> {
    return Auth.confirmSignUp(user!.email, user!.code);
  }

  getUser() : Promise<any> {
    return Auth.currentUserInfo();
  }

  getSession() : Promise<any> {
    return Auth.currentSession();
  }

  signIn(user: User) : Promise<any> {
    return Auth.signIn(user.email, user.password);
  }

  signOut() : Promise<any> {
    return Auth.signOut();
  }

  forgotPassword(user: User) : Promise<any> {
    return Auth.forgotPassword(user.email);
  }

  forgotPasswordSubmit(user: User, newPassword: string) : Promise<any> {
    return Auth.forgotPasswordSubmit(user.email, user.code, newPassword);
  }
}
