import { Observable } from "rxjs";
import { CognitoUser } from "../cognito-user.model";

export abstract class CognitoUserGateway {
    abstract signUp(user : CognitoUser): Observable<any>;
    abstract confirmSignUp(user : CognitoUser): Observable<any>;
    abstract signIn(user : CognitoUser): Observable<any>;
    abstract signOut(): Observable<any>;
    abstract forgotPassword(email: string): Observable<any>;
    abstract forgotPasswordSubmit(email: string, code: string, password: string): Observable<any>;
}