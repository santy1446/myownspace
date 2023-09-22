import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './ui/pages/pages.module';
import { DEFAULT_CONFIGURATION, DEFAULT_PROVIDERS, FULL_PROVIDERS } from './app.configuration';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  bootstrap: [AppComponent],
  providers: [...FULL_PROVIDERS]
})
export class AppModule {
  static(configuration: any) {
    let conf = DEFAULT_CONFIGURATION;
    if (configuration) {
      conf = {
        ...DEFAULT_CONFIGURATION,
        infrastructures: configuration.infrastructures || conf.infrastructures
      }
    }

    return {
      ngModule: AppModule,
      providers: [
        ...DEFAULT_PROVIDERS,
        ...conf.infrastructures.map((x) => {
          return { provide: x.gateway, useClass: x.implementation };
        }),
      ],
    };
  }
}
