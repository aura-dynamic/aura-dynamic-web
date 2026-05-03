export interface ProjectCapability {
  titleKey: string;
}

export interface ProjectImpact {
  key: string;
}

export interface ProjectModule {
  titleKey: string;
  features: string[]; // keys
}

export interface Project {
  slug: string;
  titleKey: string;
  taglineKey: string;
  descriptionKey: string;
  overviewKey: string;
  deployedAtKey?: string;
  capabilities: string[]; // keys for translations
  projectModules?: ProjectModule[]; // Specialized modules (HR, Finance, Ecommerce, etc.)
  impacts?: string[]; // keys for translations
  features?: string[]; // keys for translations
  imageUrl?: string;
  category: 'business' | 'logistics' | 'ecommerce' | 'automotive' | 'internal';
  technologies: string[];
  seoTitle: string;
  seoDescription: string;
}
