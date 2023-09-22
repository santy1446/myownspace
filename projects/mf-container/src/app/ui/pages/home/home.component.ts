import { Component } from '@angular/core';
import { CognitoSessionResponse, CognitoUserCommonService, UserSessionDataResponse } from 'commons-lib';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _cognitoUserCommonService: CognitoUserCommonService){}

  getUserInfo() {
    this._cognitoUserCommonService.getUser().subscribe({
      next: (res: UserSessionDataResponse) => console.log("User info: ", res)
    })
  }
  getSessionInfo() {
    this._cognitoUserCommonService.getSession().subscribe({
      next: (res: CognitoSessionResponse) => console.log("Session info: ", res)
      
    })
  }
}
