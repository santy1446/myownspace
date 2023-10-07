import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { CognitoSessionResponse, CognitoUserCommonService } from 'commons-lib';
import { Router } from '@angular/router';

@Injectable()
export class ContactsInterceptor implements HttpInterceptor {

  constructor(
    private _cognitoUserCommonService: CognitoUserCommonService,
    private _router: Router,

  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this._cognitoUserCommonService.getSession()
      .pipe(
        switchMap((res: CognitoSessionResponse) => {
          if (!res) {
            return next.handle(request);
          }
          const headers = request.headers
            .set('Authorization', res.accessToken.jwtToken)
          const requestClone = request.clone({
            headers
          });
          return next.handle(requestClone).pipe(
            catchError((res) => {
              if (res.status === 401){
                localStorage.clear();
                this._router.navigate(['login']);
              }
              return of(res);
            })
          )
        })
      );
      
  }
}
