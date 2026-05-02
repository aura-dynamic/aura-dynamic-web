import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { PROJECTS } from '../../core/data/projects.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  translationService = inject(TranslationService);
  private seoService = inject(SeoService);

  imageLoaded = false;
  auraAutoImageLoaded = false;
  auraDeliveryImageLoaded = false;

  auraAuto = PROJECTS.find(p => p.slug === 'aura-auto');
  auraDelivery = PROJECTS.find(p => p.slug === 'aura-delivery');

  solutions = [
    {
      iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      titleKey: 'solutions.platforms.title',
      descKey: 'solutions.platforms.desc',
    },
    {
      iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      titleKey: 'solutions.ecommerce.title',
      descKey: 'solutions.ecommerce.desc',
    },
    {
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      titleKey: 'solutions.operational.title',
      descKey: 'solutions.operational.desc',
    },
  ];

  get auraAutoFeatures(): string[] {
    return [
      this.translationService.t('auraauto.feature1'),
      this.translationService.t('auraauto.feature2'),
      this.translationService.t('auraauto.feature3'),
      this.translationService.t('auraauto.feature4'),
    ];
  }

  get auraDeliveryFeatures(): string[] {
    return [
      this.translationService.t('delivery.feature1'),
      this.translationService.t('delivery.feature2'),
      this.translationService.t('delivery.feature3'),
      this.translationService.t('delivery.feature4'),
    ];
  }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Solutions digitales pour entreprises',
      description: 'Développement de systèmes métiers sur mesure pour automatiser les opérations des entreprises : gestion commerciale, logistique, e-commerce et outils internes.',
      ogTitle: 'Aura Dynamic | Solutions digitales pour entreprises',
      ogDescription: 'Développement de systèmes métiers sur mesure pour automatiser les opérations des entreprises : gestion commerciale, logistique, e-commerce et outils internes.'
    });
  }
}
