import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  private readonly defaultTitle = 'Aura Dynamic';
  private readonly defaultDescription = 'Aura Dynamic - Solutions digitales sur mesure pour entreprises. AURA AUTO et AURA DELIVERY, nos produits phares.';
  private readonly defaultKeywords = 'solutions digitales, gestion automobile, livraison, développement web, applications mobiles, Aura Dynamic';

  updateSeo(config: Partial<SeoConfig>): void {
    const title = config.title ? `${config.title} | ${this.defaultTitle}` : this.defaultTitle;
    const description = config.description || this.defaultDescription;
    const keywords = config.keywords || this.defaultKeywords;

    // Update title
    this.titleService.setTitle(title);

    // Update meta tags
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });

    // Open Graph tags
    this.metaService.updateTag({ property: 'og:title', content: config.ogTitle || title });
    this.metaService.updateTag({ property: 'og:description', content: config.ogDescription || description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    if (config.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: config.ogImage });
    }

    if (config.ogUrl) {
      this.metaService.updateTag({ property: 'og:url', content: config.ogUrl });
    }

    // Twitter Card tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.ogTitle || title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.ogDescription || description });

    if (config.ogImage) {
      this.metaService.updateTag({ name: 'twitter:image', content: config.ogImage });
    }
  }

  resetToDefault(): void {
    this.updateSeo({
      title: '',
      description: this.defaultDescription,
      keywords: this.defaultKeywords
    });
  }
}
