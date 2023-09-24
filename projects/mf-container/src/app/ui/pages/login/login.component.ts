import { Component, ViewChild } from '@angular/core';
import {
  LoginData,
  RegisterData,
  UiLoaderComponent,
  UiModalComponent,
  UiToastComponent
} from 'mos-design-system';
import { SignupUseCase } from '../../../domain/usecase/cognito-user/signup/signup.usecase';
import { CognitoUser } from '../../../domain/models/cognito-user/cognito-user.model';
import { ConfirmSignupUseCase } from '../../../domain/usecase/cognito-user/confirm-signup/confirm-signup.usecase';
import { SigninUseCase } from '../../../domain/usecase/cognito-user/signin/signin.usecase';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('myToast') myToast: UiToastComponent = {} as any;
  @ViewChild('myLoader') myLoader: UiLoaderComponent = {} as any;
  @ViewChild('verificationCodeModal') verificationCodeModal: UiModalComponent = {} as any;
  verificationCode: number = undefined as any;
  userSignUpData: RegisterData = {} as any

  constructor(
    private _signUpUseCase: SignupUseCase,
    private _confirmSignupUseCase: ConfirmSignupUseCase,
    private _signinUseCase: SigninUseCase,
    private _router: Router,
  ) { }

  

  private prepareUserData(user: any, isLogin: boolean): CognitoUser {
    return {
      user: isLogin ? user.singInUser : user.singUpUser,
      email: isLogin ? user.singInEmail : user.singUpEmail,
      password: isLogin ? user.singInPassword : user.singUpPassword,
      code: undefined,
      newPassword: ''
    }
  }

  /**------------------- SIGNUP------------------------ */

  signUpCognito(userData: RegisterData): void {
    this.userSignUpData = userData;
    this.myLoader.showLoader();
    this._signUpUseCase.signUp(this.prepareUserData(userData, false)).subscribe({
      next: () => this.signUpCognitoHandler(),
      error: (error) => this.cognitoErrorHandler(error)
    })
  }

  private signUpCognitoHandler(): void {
    this.myLoader.hideLoader();
    this.verificationCodeModal.openModal();
  }

  /**------------------- CONFIRM SIGNUP------------------------ */

  confirmClick(): void {
    if (!this.verificationCode) {
      this.myToast.createNotification(
        'info',
        'Verification code is needed',
        3000
      );
    } else {
      this.confirmSignUp();
    }
  }

  confirmSignUp(): void {
    const userData = this.prepareUserData(this.userSignUpData, false)
    userData.code = this.verificationCode;
    this.myLoader.showLoader();
    this._confirmSignupUseCase.confirmSignUp(userData).subscribe({
      next: () => this.confirmSignUpHandler(),
      error: (error) => this.cognitoErrorHandler(error)
    })
  }

  private confirmSignUpHandler(): void {
    this.verificationCodeModal.closeModal();
    this.myLoader.hideLoader();
    this.myToast.createNotification(
      'success',
      'Account confirmed!',
      3000
    );
  }


  /**------------------- SIGNIN ------------------------ */

  signInCognito(userData: LoginData): void {
    this.myLoader.showLoader();
    this._signinUseCase.signIn(this.prepareUserData(userData, true)).subscribe({
      next: () => this.signInCognitoHandler(),
      error: (error) => this.cognitoErrorHandler(error)
    })
  }

  private signInCognitoHandler(): void {
    this.myLoader.hideLoader();
    this._router.navigate(['home']);
  }

  /**------------------------------------------- */

  private cognitoErrorHandler(error: any): void {
    this.myLoader.hideLoader();
    this.myToast.createNotification(
      'error',
      error.message,
      5000
    );
  }
}
