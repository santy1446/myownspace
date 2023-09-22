export interface CognitoUser {
    email: string;
    password: string;
    newPassword?: string;
    code?: number
}