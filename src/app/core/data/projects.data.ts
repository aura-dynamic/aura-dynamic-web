import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'aura-auto',
    titleKey: 'auraauto.title',
    taglineKey: 'auraauto.tagline',
    descriptionKey: 'auraauto.overview',
    overviewKey: 'auraauto.overview',
    deployedAtKey: 'auraauto.deployed',
    category: 'automotive',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
    capabilities: [
      'auraauto.cap.1', 'auraauto.cap.2', 'auraauto.cap.3',
      'auraauto.cap.4', 'auraauto.cap.5', 'auraauto.cap.6'
    ],
    impacts: [
      'auraauto.impact.1', 'auraauto.impact.2', 
      'auraauto.impact.3', 'auraauto.impact.4'
    ],
    seoTitle: 'AURA AUTO - Plateforme de Gestion Automobile',
    seoDescription: 'Découvrez AURA AUTO, notre plateforme de gestion commerciale automobile conçue pour les concessionnaires.'
  },
  {
    slug: 'aura-delivery',
    titleKey: 'delivery.title',
    taglineKey: 'delivery.tagline',
    descriptionKey: 'delivery.overview',
    overviewKey: 'delivery.overview',
    deployedAtKey: 'delivery.deployed',
    category: 'logistics',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker'],
    capabilities: [
      'delivery.cap.1', 'delivery.cap.2', 'delivery.cap.3',
      'delivery.cap.4', 'delivery.cap.5'
    ],
    impacts: [
      'delivery.impact.1', 'delivery.impact.2', 
      'delivery.impact.3', 'delivery.impact.4'
    ],
    seoTitle: 'AURA DELIVERY - Plateforme de Gestion Logistique',
    seoDescription: 'Optimisez vos livraisons avec AURA DELIVERY, notre solution de gestion logistique et financière.'
  },
  {
    slug: 'ticketing-system',
    titleKey: 'ticketing.title',
    taglineKey: 'ticketing.tagline',
    descriptionKey: 'ticketing.overview',
    overviewKey: 'ticketing.overview',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    capabilities: [
      'ticketing.feature.1', 'ticketing.feature.2', 
      'ticketing.feature.3', 'ticketing.feature.4'
    ],
    seoTitle: 'Système de Billetterie - Aura Dynamic',
    seoDescription: 'Une plateforme robuste pour la vente et la gestion de billets en ligne.'
  },
  {
    slug: 'ecommerce-solutions',
    titleKey: 'ecommerce.title',
    taglineKey: 'ecommerce.tagline',
    descriptionKey: 'ecommerce.overview',
    overviewKey: 'ecommerce.overview',
    category: 'ecommerce',
    technologies: ['Angular', 'Node.js', 'MongoDB'],
    capabilities: [
      'ecommerce.feature.1', 'ecommerce.feature.2', 'ecommerce.feature.3'
    ],
    seoTitle: 'Solutions E-Commerce Sur Mesure',
    seoDescription: 'Des plateformes e-commerce performantes et évolutives pour votre entreprise.'
  },
  {
    slug: 'hr-finance-system',
    titleKey: 'hrfinance.title',
    taglineKey: 'hrfinance.tagline',
    descriptionKey: 'hrfinance.overview',
    overviewKey: 'hrfinance.overview',
    category: 'internal',
    technologies: ['Angular', 'Node.js', 'PostgreSQL'],
    capabilities: [
      'hrfinance.cap.hr.1', 'hrfinance.cap.hr.2', 'hrfinance.cap.hr.3', 'hrfinance.cap.hr.4',
      'hrfinance.cap.acc.1', 'hrfinance.cap.acc.2', 'hrfinance.cap.acc.3', 'hrfinance.cap.acc.4',
      'hrfinance.cap.rep.1', 'hrfinance.cap.rep.2', 'hrfinance.cap.rep.3', 'hrfinance.cap.rep.4'
    ],
    impacts: [
      'hrfinance.value.1', 'hrfinance.value.2', 'hrfinance.value.3', 'hrfinance.value.4'
    ],
    seoTitle: 'Système de Gestion RH & Finance',
    seoDescription: 'Centralisez vos opérations internes avec notre solution intégrée RH et Finance.'
  }
];
