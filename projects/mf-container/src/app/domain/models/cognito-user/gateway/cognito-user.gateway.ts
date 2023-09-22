import { Observable } from "rxjs";
import { CognitoUser } from "../cognito-user.model";

export abstract class CognitoUserGateway {
    abstract signUp(user : CognitoUser): Observable<any>;
    abstract confirmSignUp(user : CognitoUser): Observable<any>;
    abstract signIn(user : CognitoUser): Observable<any>;
    abstract signOut(): Observable<any>;
    abstract forgotPassword(user : CognitoUser): Observable<any>;
    abstract forgotPasswordSubmit(user : CognitoUser): Observable<any>;
}