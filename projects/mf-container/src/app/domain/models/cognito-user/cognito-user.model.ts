export interface CognitoUser {
    email: string;
    password: string;
    newPassword?: string;
    code?: string
}

/** Register cognito response */

export interface RegisterCognitoResponse {
    CodeDeliveryDetails: CodeDeliveryDetails;
    UserConfirmed:       boolean;
    UserSub:             string;
}

export interface CodeDeliveryDetails {
    AttributeName:  string;
    DeliveryMedium: string;
    Destination:    string;
}

/** Cognito session response */

export interface CognitoSessionResponse {
    idToken:      IDToken;
    refreshToken: RefreshToken;
    accessToken:  AccessToken;
    clockDrift:   number;
}

export interface AccessToken {
    jwtToken: string;
    payload:  AccessTokenPayload;
}

export interface AccessTokenPayload {
    sub:        string;
    iss:        string;
    client_id:  string;
    origin_jti: string;
    event_id:   string;
    token_use:  string;
    scope:      string;
    auth_time:  number;
    exp:        number;
    iat:        number;
    jti:        string;
    username:   string;
}

export interface IDToken {
    jwtToken: string;
    payload:  IDTokenPayload;
}

export interface IDTokenPayload {
    sub:                string;
    email_verified:     boolean;
    iss:                string;
    "cognito:username": string;
    origin_jti:         string;
    aud:                string;
    event_id:           string;
    token_use:          string;
    auth_time:          number;
    exp:                number;
    iat:                number;
    jti:                string;
    email:              string;
}

export interface RefreshToken {
    token: string;
}

/** User session data Response */

export interface UserSessionDataResponse {
    username:   string;
    attributes: Attributes;
}

export interface Attributes {
    sub:            string;
    email_verified: boolean;
    email:          string;
}