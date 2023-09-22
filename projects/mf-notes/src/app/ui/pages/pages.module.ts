import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { NotesComponent } from './notes/notes.component';

/** MOS */
import { 
  UiAnimatedContainerModule,
  UiLoaderModule,
  UiNoteModule 
} from 'mos-design-system';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CONFIGURATION, DEFAULT_PROVIDERS, FULL_PROVIDERS } from './../../app.configuration';

@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiAnimatedContainerModule,
    UiNoteModule,
    UiLoaderModule,
    HttpClientModule
  ],
  providers: [...FULL_PROVIDERS]
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
