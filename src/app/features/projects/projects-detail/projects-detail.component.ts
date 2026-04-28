import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';
import { SeoService } from '../../../core/services/seo.service';
import { PROJECTS } from '../../../core/data/projects.data';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  translationService = inject(TranslationService);
  private seoService = inject(SeoService);

  project = signal<Project | null>(null);
  relatedProjects = signal<Project[]>([]);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const foundProject = PROJECTS.find(p => p.slug === slug);
        if (foundProject) {
          this.project.set(foundProject);
          this.updateSeo(foundProject);
          this.loadRelatedProjects(foundProject);
          window.scrollTo(0, 0);
        } else {
          this.router.navigate(['/projects']);
        }
      }
    });
  }

  private updateSeo(project: Project): void {
    this.seoService.updateSeo({
      title: project.seoTitle,
      description: project.seoDescription,
      keywords: `${project.technologies.join(', ')}, ${this.translationService.t(project.titleKey)}`
    });
  }

  private loadRelatedProjects(currentProject: Project): void {
    const related = PROJECTS
      .filter(p => p.slug !== currentProject.slug && p.category === currentProject.category)
      .slice(0, 3);
    
    // If no projects in same category, just take other projects
    if (related.length === 0) {
      this.relatedProjects.set(PROJECTS.filter(p => p.slug !== currentProject.slug).slice(0, 3));
    } else {
      this.relatedProjects.set(related);
    }
  }
}
