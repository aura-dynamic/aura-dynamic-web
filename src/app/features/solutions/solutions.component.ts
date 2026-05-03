import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  translationService = inject(TranslationService);
  private seoService = inject(SeoService);

  get solutions() {
    return [
      {
        title: this.translationService.t('solutions.platforms.title'),
        description: this.translationService.t('solutions.platforms.desc'),
        features: [
          this.translationService.t('solutions.platforms.feat1'),
          this.translationService.t('solutions.platforms.feat2'),
          this.translationService.t('solutions.platforms.feat3')
        ],
        iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      },
      {
        title: this.translationService.t('solutions.operational.title'),
        description: this.translationService.t('solutions.operational.desc'),
        features: [
          this.translationService.t('solutions.operational.feat1'),
          this.translationService.t('solutions.operational.feat2'),
          this.translationService.t('solutions.operational.feat3')
        ],
        iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      },
      {
        title: this.translationService.t('solutions.ecommerce.title'),
        description: this.translationService.t('solutions.ecommerce.desc'),
        features: [
          this.translationService.t('solutions.ecommerce.feat1'),
          this.translationService.t('solutions.ecommerce.feat2'),
          this.translationService.t('solutions.ecommerce.feat3')
        ],
        iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      },
    ];
  }

  get processSteps() {
    return [
      { 
        number: '1', 
        title: this.translationService.t('process.step1.title'), 
        description: this.translationService.t('process.step1.desc') 
      },
      { 
        number: '2', 
        title: this.translationService.t('process.step2.title'), 
        description: this.translationService.t('process.step2.desc') 
      },
      { 
        number: '3', 
        title: this.translationService.t('process.step3.title'), 
        description: this.translationService.t('process.step3.desc') 
      },
      { 
        number: '4', 
        title: this.translationService.t('process.step4.title'), 
        description: this.translationService.t('process.step4.desc') 
      },
    ];
  }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Nos Solutions',
      description: 'Développement web, applications mobiles et logiciels métier sur mesure. Des systèmes robustes conçus pour durer.',
      keywords: 'développement web, applications mobiles, logiciels métier, Angular, React, solutions digitales'
    });
  }
}
