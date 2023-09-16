import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CognitoUserGateway } from './domain/models/cognito-user/gateway/cognito-user.gateway';
import { CognitoUserService } from './infraestructure/driven-adapter/cognito-user/cognito-user.service';
import { PagesModule } from './ui/pages/pages.module';
import { UiFooterModule, UiHeaderModule } from 'mos-design-system';
import { ComponentsModule } from './ui/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    UiHeaderModule,
    UiFooterModule,
    ComponentsModule,
  ],
  providers: [
    { provide: CognitoUserGateway, useClass: CognitoUserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
