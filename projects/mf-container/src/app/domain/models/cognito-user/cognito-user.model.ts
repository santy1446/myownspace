export interface CognitoUser {
    user?: string;
    email: string;
    password: string;
    newPassword?: string;
    code?: number
}