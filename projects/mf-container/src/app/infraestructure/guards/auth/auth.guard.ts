import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CognitoUserCommonService } from 'commons-lib';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _cognitoUserCommonService: CognitoUserCommonService
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._cognitoUserCommonService.getUser().pipe(map((res) => {
        if(res){
          return true
        }
        this._router.navigate(['login']);
        return false
      }));
  }
}
