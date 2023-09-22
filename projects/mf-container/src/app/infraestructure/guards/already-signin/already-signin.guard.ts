import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CognitoUserCommonService } from 'commons-lib';

@Injectable({
  providedIn: 'root'
})
export class AlreadySigninGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _cognitoUserCommonService: CognitoUserCommonService
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._cognitoUserCommonService.getUser().pipe(map((res) => {
        if(!res){
          return true
        }
        this._router.navigate(['home']);
        return false
      }));
  }
  
}
