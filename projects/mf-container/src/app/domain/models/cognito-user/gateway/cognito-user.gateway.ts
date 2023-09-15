import { Observable } from "rxjs";
import { CognitoSessionResponse, CognitoUser, RegisterCognitoResponse, UserSessionDataResponse } from "../cognito-user.model";

export abstract class CognitoUserGateway {
    abstract signUp(user : CognitoUser): Observable<RegisterCognitoResponse>;
    abstract confirmSignUp(user : CognitoUser): Observable<any>;
    abstract getUser(): Observable<UserSessionDataResponse>;
    abstract getSession(): Observable<CognitoSessionResponse>;
    abstract signIn(user : CognitoUser): Observable<any>;
    abstract signOut(): Observable<any>;
    abstract forgotPassword(user : CognitoUser): Observable<any>;
    abstract forgotPasswordSubmit(user : CognitoUser): Observable<any>;
}