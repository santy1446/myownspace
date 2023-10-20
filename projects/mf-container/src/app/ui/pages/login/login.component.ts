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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordUseCase } from '../../../domain/usecase/cognito-user/forgot-password/forgot-password.usecase';
import { ForgotPasswordSubmitUseCase } from '../../../domain/usecase/cognito-user/forgot-password-submit/forgot-password-submit.usecase';
const TOAST_DURATION: number = 5000;
const PASSWORD_REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('myToast') myToast: UiToastComponent = {} as any;
  @ViewChild('myLoader') myLoader: UiLoaderComponent = {} as any;
  @ViewChild('verificationCodeModal') verificationCodeModal: UiModalComponent = {} as any;
  @ViewChild('resetPassword') resetPassword: UiModalComponent = {} as any;
  verificationCode: number = undefined as any;
  userSignUpData: RegisterData = {} as any;
  forgotPasswordActionState: "email" | "code" = "email";
  resetPasswordForm: FormGroup;
  showLoginForm: boolean = false;
  resetForms: boolean = false;

  constructor(
    private _signUpUseCase: SignupUseCase,
    private _confirmSignupUseCase: ConfirmSignupUseCase,
    private _signinUseCase: SigninUseCase,
    private _forgotPasswordUseCase: ForgotPasswordUseCase,
    private _forgotPasswordSubmitUseCase: ForgotPasswordSubmitUseCase,
    private _router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
    })
  }



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
        TOAST_DURATION
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
      TOAST_DURATION
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

  /**---------------- RESET PASSWORD -------------------- */

  onResetPassword() {
    this.resetPassword.openModal();
  }

  confirmResetPassword() {
    if (this.forgotPasswordActionState === 'email') {
      if (this.resetPasswordForm.get('email')?.valid) {
        this.sendResetPasswordRequest();
      } else {
        this.myToast.createNotification(
          'error',
          'Please enter a valid email',
          TOAST_DURATION
        );
      }
    }else {
      this.confirmResetPasswordRequest();
    }
  }

  sendResetPasswordRequest() {
    this.myLoader.showLoader();
    this._forgotPasswordUseCase.forgotPassword(
      this.resetPasswordForm.get('email')?.value
    ).subscribe({
      next: () => {
        this.myLoader.hideLoader();
        this.forgotPasswordActionState = 'code';
      },
      error: (error) => this.cognitoErrorHandler(error)
    })
  }

  confirmResetPasswordRequest() {
    if (this.resetPasswordForm.valid) {
      this.myLoader.showLoader();
      const formValues = this.resetPasswordForm.value;
      this._forgotPasswordSubmitUseCase.forgotPasswordSubmit(
        formValues.email,
        formValues.code,
        formValues.password
      ).subscribe({
        next: () => this.confirmResetPasswordRequestHandler(),
        error: (error) => this.cognitoErrorHandler(error)
      })
    }

  }

  private confirmResetPasswordRequestHandler() {
    this.myToast.createNotification(
      'success',
      'The password was reset!',
      TOAST_DURATION
    );
    this.myLoader.hideLoader();
    this.resetPassword.closeModal();
    this.showLoginForm = true;
    this.resetForms = true;
  }

  /**
   * Validate if is necessary to show the error alert below the field
   * @param controlName Field to check
   * @returns if is necessary to show the alert (boolean)
   */
  isInvalidFormField(controlName : string): boolean {
    const controlField = this.resetPasswordForm.controls[controlName]; 
    return controlField.invalid && controlField.dirty || controlField.touched && controlField.invalid
  }

  private cognitoErrorHandler(error: any): void {
    this.myLoader.hideLoader();
    this.myToast.createNotification(
      'error',
      error.message,
      TOAST_DURATION
    );
  }
}
