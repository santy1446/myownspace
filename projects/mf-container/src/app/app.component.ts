import { GetSessionUseCase } from './domain/usecase/cognito-user/get-session/get-session.usecase';
import { GetUserUseCase } from './domain/usecase/cognito-user/get-user/get-user.usecase';
import { ForgotPasswordSubmitUseCase } from './domain/usecase/cognito-user/forgot-password-submit/forgot-password-submit.usecase';
import { ForgotPasswordUseCase } from './domain/usecase/cognito-user/forgot-password/forgot-password.usecase';
import { ConfirmSignupUseCase } from './domain/usecase/cognito-user/confirm-signup/confirm-signup.usecase';
import { SignupUseCase } from './domain/usecase/cognito-user/signup/signup.usecase';
import { Component, OnInit } from '@angular/core';
import { CognitoSessionResponse, CognitoUser, UserSessionDataResponse } from './domain/models/cognito-user/cognito-user.model';
import { SigninUseCase } from './domain/usecase/cognito-user/signin/signin.usecase';
import { NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mf-container';
  user: CognitoUser = {} as any;
  isConfirm: boolean = false;
  isForgotPassword: boolean = false;
  areHeaderAndFooterVisible: boolean = false;

  links = [
    {
      name: "Option 1",
      route: "route/1",
      type: "link"
    },
    {
      name: "Option 2",
      route: "route/2",
      type: "link"
    }
  ]

  generalLinks = [
    {
      categoryName: "Services",
      categoryLinks: [
        {
          name: "ToDo",
          route: "route",
          type: "link"
        },
        {
          name: "Notes",
          route: "route",
          type: "link"
        }
      ]
    },
    {
      categoryName: "About",
      categoryLinks: [
        {
          name: "This project",
          route: "route",
          type: "link"
        },
        {
          name: "Me",
          route: "route",
          type: "link"
        }
      ]
    }
  ]

  iconsInfo = {
    title: "Contact me",
    buttons: [
      {
        name: "LinkedIn",
        icon: "fab fa-linkedin-in",
        type: "link"
      }
    ]
  }

  constructor(
    private _forgotPasswordUseCase: ForgotPasswordUseCase,
    private _forgotPasswordSubmitUseCase: ForgotPasswordSubmitUseCase,
    private _getUserUseCase: GetUserUseCase,
    private _getSessionUseCase: GetSessionUseCase,
    private _router: Router
  ) {
    _router.events.subscribe((elm) => {
      if (elm instanceof NavigationStart) {
        this.areHeaderAndFooterVisible = elm.url !== '/login'
        console.log(elm);
      }
    })

  }

  ngOnInit(): void {
  }

  getLinkSelected(event: any) {
    console.log(event);
  }

  getIconSelected(event: any) {
    console.log(event);
  }


  showElementHeaderSelected(event: any) {
    console.log(event);
  }

  forgotPasswordClicked() {
    this._forgotPasswordUseCase.forgotPassword(this.user).subscribe({
      next: (res) => {
        this.isForgotPassword = true;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  newPasswordSubmit() {
    this._forgotPasswordSubmitUseCase.forgotPasswordSubmit(this.user).subscribe({
      next: (res) => {
        alert("Password updated");
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getUserInfo() {
    this._getUserUseCase.getUser().subscribe({
      next: (res: UserSessionDataResponse) => {
        console.log(res);

      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getSessionInfo() {
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

