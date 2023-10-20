import { ForgotPasswordSubmitUseCase } from './domain/usecase/cognito-user/forgot-password-submit/forgot-password-submit.usecase';
import { ForgotPasswordUseCase } from './domain/usecase/cognito-user/forgot-password/forgot-password.usecase';
import { Component, OnInit } from '@angular/core';
import { CognitoUser } from './domain/models/cognito-user/cognito-user.model';
import { NavigationStart, Router } from '@angular/router';
import { SignoutUseCase } from './domain/usecase/cognito-user/signout/signout.usecase';
const LINKIN_ROUTE: string = "https://www.linkedin.com/in/santy1446/";
const GITHUB_ROUTE: string = "https://github.com/santy1446";

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
      name: "Notes",
      route: "notes",
      type: "link"
    },
    {
      name: "Contacts",
      route: "contacts",
      type: "link"
    },
    {
      name: "LogOut",
      route: "/",
      type: "LogOut"
    }
  ]

  generalLinks = [
    {
      categoryName: "Services",
      categoryLinks: [
        {
          name: "Notes",
          route: "notes",
          type: "link"
        },
        {
          name: "Contacts",
          route: "contacts",
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
        type: "external"
      },
      {
        name: "GitHub",
        icon: "fab fa-github",
        type: "external"
      }
    ]
  }

  constructor(
    private _router: Router,
    private _signoutUseCase: SignoutUseCase
  ) {
    _router.events.subscribe((elm) => {
      if (elm instanceof NavigationStart) {
        this.areHeaderAndFooterVisible = elm.url !== '/login' && elm.url !== '/';
      }
    })

  }

  ngOnInit(): void {
  }

  getLinkSelected(event: any) {
    if (event.type === "link") {
      this._router.navigate([event.route]);
    }
  }

  getIconSelected(event: any) {
    if (event.type === "external") {
      let a = document.createElement('a');
      a.setAttribute('href',event.name === "LinkedIn" ? LINKIN_ROUTE : GITHUB_ROUTE);
      a.setAttribute('target', '_blank');
      a.click();
      a.remove();
    }
  }


  clickHeaderElementSelected(event: any) {
    if (event.type === "link") {
      this._router.navigate([event.route]);
    }else {
      this.signOut();
    }
  }

  signOut(): void {
    this._signoutUseCase.signOut().subscribe({
      next: () => this._router.navigate(['login'])
    })
  }

}

