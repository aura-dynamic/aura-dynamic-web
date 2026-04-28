import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';
import { SeoService } from '../../../core/services/seo.service';
import { PROJECTS } from '../../../core/data/projects.data';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  translationService = inject(TranslationService);
  private seoService = inject(SeoService);

  projects = PROJECTS;

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Nos Plateformes & Projets',
      description: 'Découvrez nos solutions d\'entreprise : AURA AUTO, AURA DELIVERY et nos systèmes sur mesure RH, Finance et E-commerce.',
      keywords: 'projets aura dynamic, portfolio digital, solutions sur mesure, AURA AUTO, AURA DELIVERY'
    });
  }
}
