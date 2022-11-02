import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageSelectorService} from "../core/services/language-selector.service";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})

export class LanguageSelectorComponent implements OnInit {

  availableLanguages: string[] = [
    'en',
    'hr'
  ]

  private defaultLanguage = 'en';

  selectedLanguage!: string;

  private cachedLanguage = localStorage.getItem('language');

  constructor(private translate: TranslateService, private language: LanguageSelectorService) {
    this.translate.addLangs(this.availableLanguages);
    this.translate.setDefaultLang(this.defaultLanguage);
  }

  ngOnInit(): void {
    this.setSelectedLanguage();
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.language.setCurrentLanguage(language);
  }

  private setSelectedLanguage(): void {
    if (this.cachedLanguage) {
      this.selectedLanguage = this.cachedLanguage;
    } else {
      this.selectedLanguage = this.translate.getDefaultLang();
    }
  }
}
