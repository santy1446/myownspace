import { Component } from '@angular/core';
import { CognitoUserCommonService, UserSessionDataResponse } from 'commons-lib';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userName: string = "";

  constructor(private _cognitoUserCommonService: CognitoUserCommonService){
    this.getUserInfo();
  }

  getUserInfo() {
    this._cognitoUserCommonService.getUser().subscribe({
      next: (res: UserSessionDataResponse) => {
        this.userName = res.attributes.nickname;
      }
    })
  }
}
