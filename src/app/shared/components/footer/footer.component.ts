import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';
import { CONTACT_CONFIG } from '../../../core/config/contact.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  translationService = inject(TranslationService);
  config = CONTACT_CONFIG;

  currentYear = new Date().getFullYear();

  navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/about', key: 'nav.about' },
    { path: '/solutions', key: 'nav.solutions' },
    { path: '/projects', key: 'nav.projects' },
    { path: '/contact', key: 'nav.contact' },
  ];

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
