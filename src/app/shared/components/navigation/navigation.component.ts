import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  translationService = inject(TranslationService);
  private router = inject(Router);

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  currentRoute = signal('');

  navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/about', key: 'nav.about' },
    { path: '/solutions', key: 'nav.solutions' },
    { path: '/projects', key: 'nav.projects' },
    { path: '/contact', key: 'nav.contact' },
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      }, { passive: true });
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute.set(event.urlAfterRedirects);
      this.closeMobileMenu();
    });
  }

  isActive(path: string): boolean {
    if (path === '/') {
      return this.currentRoute() === '/';
    }
    return this.currentRoute().startsWith(path);
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(state => {
      const newState = !state;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = newState ? 'hidden' : '';
      }
      return newState;
    });
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
