import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

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

  solutions = [
    {
      iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: this.translationService.t('solutions.web.title'),
      description: this.translationService.t('solutions.web.desc'),
    },
    {
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: this.translationService.t('solutions.mobile.title'),
      description: this.translationService.t('solutions.mobile.desc'),
    },
    {
      iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      title: this.translationService.t('solutions.business.title'),
      description: this.translationService.t('solutions.business.desc'),
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
      title: 'Solutions Digitales pour Entreprises',
      description: 'Aura Dynamic développe des systèmes sur mesure qui transforment votre activité. Découvrez AURA AUTO et AURA DELIVERY, nos solutions phares.',
      keywords: 'solutions digitales, AURA AUTO, AURA DELIVERY, gestion automobile, livraison, développement web'
    });
  }
}
