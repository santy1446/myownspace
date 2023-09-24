import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

/** MOS */
import { 
  UiAnimatedContainerModule,
  UiInputModule,
  UiLoaderModule,
  UiLoginModule,
  UiModalModule,
  UiToastModule
} from 'mos-design-system';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UiAnimatedContainerModule,
    UiLoginModule,
    ComponentsModule,
    UiToastModule,
    UiModalModule,
    UiLoaderModule,
    UiInputModule,
    FormsModule,

  ]
})
export class PagesModule { }
