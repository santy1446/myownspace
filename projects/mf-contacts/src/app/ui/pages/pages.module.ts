import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { DEFAULT_CONFIGURATION, DEFAULT_PROVIDERS, FULL_PROVIDERS } from '../../app.configuration';
import { HttpClientModule } from '@angular/common/http';
import {
  UiAnimatedContainerModule,
  UiButtonModule,
  UiContactCardModule,
  UiInputModule,
  UiLoaderModule,
  UiModalModule,
  UiProfileImageUploadModule,
  UiToastModule 
} from 'mos-design-system';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralSearchPipe } from 'commons-lib';


@NgModule({
  declarations: [
    ContactsComponent,
    GeneralSearchPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UiAnimatedContainerModule,
    UiLoaderModule,
    UiButtonModule,
    UiToastModule,
    UiInputModule,
    UiModalModule,
    UiContactCardModule,
    UiProfileImageUploadModule
  ],
  providers: [
    ...FULL_PROVIDERS]
})
export class PagesModule { 
  static(configuration: any) {
    let conf = DEFAULT_CONFIGURATION;
    if (configuration) {
      conf = {
        ...DEFAULT_CONFIGURATION,
        infrastructures: configuration.infrastructures || conf.infrastructures
      }
    }

    return {
      ngModule: PagesModule,
      providers: [
        ...DEFAULT_PROVIDERS,
        ...conf.infrastructures.map((x) => {
          return { provide: x.gateway, useClass: x.implementation };
        }),
      ],
    };
  }
}
