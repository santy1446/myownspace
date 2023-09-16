import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { GetUserUseCase } from '../../../domain/usecase/cognito-user/get-user/get-user.usecase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _getUserUseCase: GetUserUseCase
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._getUserUseCase.getUser().pipe(map((res) => {
      if(res){
        return true
      }
      this._router.navigate(['login']);
      return false
    }));
  }
}
