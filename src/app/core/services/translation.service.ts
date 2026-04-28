import { Injectable, signal, computed } from '@angular/core';
import { Language, translations } from '../models/translations.model';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = signal<Language>('fr');

  language = computed(() => this.currentLanguage());

  toggleLanguage(): void {
    this.currentLanguage.update(lang => lang === 'fr' ? 'en' : 'fr');
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  t(key: string): string {
    const translation = translations[key];
    if (!translation) {
      return key;
    }
    return translation[this.currentLanguage()];
  }
}
