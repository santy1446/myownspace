import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CognitoUserGateway } from './domain/models/cognito-user/gateway/cognito-user.gateway';
import { CognitoUserService } from './infraestructure/driven-adapter/cognito-user/cognito-user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: CognitoUserGateway, useClass: CognitoUserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
