import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageSelectorService} from "../../core/services/language-selector.service";

@Component({
  template: ``,
  selector: 'app-base'
})
export class BaseComponent {

  constructor(private translate: TranslateService, private languageSelector: LanguageSelectorService) {
    this.translate.use(this.languageSelector.selectedLanguage());
    this.setLanguageListener();
  }

  private setLanguageListener() {
    this.languageSelector.getCurrentLanguage().subscribe((response: string) => {
      this.translate.use(response);
    })
  }
}
