import { Component, OnInit } from '@angular/core';
import { CognitoService } from './service/cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mf-container';
  user: User | undefined;
  isConfirm: boolean = false;
  isForgotPassword: boolean = false

  constructor(private cognitoService: CognitoService) {}

  ngOnInit(): void {
    this.user = {} as User;
    this.isConfirm = false;
  } 

  signUpCognito() {
    this.cognitoService.signUp(this.user)
    .then(() => {
      this.isConfirm = true;
    })
    .catch((error: any) => {
      console.error(error.message);
    });
  }

  confirmSignUp() {
    this.cognitoService.confirmSignUp(this.user)
    .then(() => {
      alert("Confirmed!")
    })
    .catch((error: any) => {
      console.error(error.message);
    });
    
  }

  signInCognito() {
    this.cognitoService.signIn(this.user!)
    .then((res) => {
      
      alert("Login successful");
    })
    .catch((error) => {
      console.error(error);
    })
  }

  forgotPasswordClicked(){
    this.cognitoService.forgotPassword(this.user!)
    .then((res) => {
      console.log(res);
      this.isForgotPassword = true;
    })
    .catch((error) => {
      console.error(error);
    })
  }

  newPasswordSubmit() {
    this.cognitoService.forgotPasswordSubmit(this.user!, this.user!.password)
    .then((res) => {
      console.log(res);
      alert("Password updated");
    })
    .catch((error) => {
      console.error(error);
    })
  }

  getUserInfo() {
    this.cognitoService.getUser()
    .then((res) => {
      console.log(res);
      
      
    })
    .catch((error) => {
      console.error(error);
    })
  }
}



export interface User {
  email: string;
  password: string;
  newPassword?: string;
  code: string
}
