import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Feature1RoutingModule} from './feature-1-routing.module';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {Feature1Component} from "./feature-1.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [Feature1Component],
  imports: [
    CommonModule,
    Feature1RoutingModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class Feature1Module {
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/feature-1/', '.json');
}
