import { GetSessionUseCase } from './domain/usecase/cognito-user/get-session/get-session.usecase';
import { GetUserUseCase } from './domain/usecase/cognito-user/get-user/get-user.usecase';
import { ForgotPasswordSubmitUseCase } from './domain/usecase/cognito-user/forgot-password-submit/forgot-password-submit.usecase';
import { ForgotPasswordUseCase } from './domain/usecase/cognito-user/forgot-password/forgot-password.usecase';
import { ConfirmSignupUseCase } from './domain/usecase/cognito-user/confirm-signup/confirm-signup.usecase';
import { SignupUseCase } from './domain/usecase/cognito-user/signup/signup.usecase';
import { Component, OnInit } from '@angular/core';
import { CognitoSessionResponse, CognitoUser, UserSessionDataResponse } from './domain/models/cognito-user/cognito-user.model';
import { SigninUseCase } from './domain/usecase/cognito-user/signin/signin.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mf-container';
  user: CognitoUser = {} as any;
  isConfirm: boolean = false;
  isForgotPassword: boolean = false

  constructor(
    private _signUpUseCase: SignupUseCase,
    private _confirmSignupUseCase : ConfirmSignupUseCase,
    private _signinUseCase: SigninUseCase,
    private _forgotPasswordUseCase: ForgotPasswordUseCase,
    private _forgotPasswordSubmitUseCase: ForgotPasswordSubmitUseCase,
    private _getUserUseCase: GetUserUseCase,
    private _getSessionUseCase : GetSessionUseCase
    
  ) {}

  ngOnInit(): void {
    this.isConfirm = false;
  } 

  signUpCognito() {
    this._signUpUseCase.signUp(this.user).subscribe({
      next: (res) => {
        console.log(res);
        this.isConfirm = true;
      },
      error: (error) => {
        console.error(error);
        
      }
    })
  }

  confirmSignUp() {
    this._confirmSignupUseCase.confirmSignUp(this.user).subscribe({
      next: (res) => {
        alert("Confirmed!")
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  signInCognito() {
    this._signinUseCase.signIn(this.user).subscribe({
      next: (res) => {
        alert("Login successful");
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  forgotPasswordClicked(){
    this._forgotPasswordUseCase.forgotPassword(this.user).subscribe({
      next: (res) => {
        this.isForgotPassword = true;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  newPasswordSubmit(){
    this._forgotPasswordSubmitUseCase.forgotPasswordSubmit(this.user).subscribe({
      next: (res) => {
        alert("Password updated");
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getUserInfo(){
    this._getUserUseCase.getUser().subscribe({
      next: (res: UserSessionDataResponse) => {
        console.log(res);
        
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getSessionInfo(){
    this._getSessionUseCase.getSession().subscribe({
      next: (res: CognitoSessionResponse) => {
        console.log(res);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}

