import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageSelectorService {

  currentLanguage = new Subject<any>();

  selectedLanguage(): string {
    let localStorageValue = localStorage.getItem('language')
    return localStorageValue ? localStorageValue : 'en';
  }

  constructor() {
  }

  getCurrentLanguage(): Subject<string> {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage.next(language);
  }
}
