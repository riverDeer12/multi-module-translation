import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguageSelectorComponent} from './language-selector/language-selector.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {BaseComponent} from './components/base/base.component';

@NgModule({
  declarations: [
    LanguageSelectorComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    LanguageSelectorComponent,
    BaseComponent,
    DropdownModule
  ]
})
export class SharedModule {
}
