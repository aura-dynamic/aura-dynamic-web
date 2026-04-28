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
        title: this.translationService.t('solutions.web.title'),
        description: this.translationService.t('solutions.web.desc'),
        features: ['Angular / React', 'APIs RESTful', 'Architecture cloud'],
        iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      },
      {
        title: this.translationService.t('solutions.mobile.title'),
        description: this.translationService.t('solutions.mobile.desc'),
        features: ['React Native', 'Flutter', 'PWA'],
        iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      },
      {
        title: this.translationService.t('solutions.business.title'),
        description: this.translationService.t('solutions.business.desc'),
        features: ['Gestion commerciale', 'Tableaux de bord', 'Automatisation'],
        iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
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
