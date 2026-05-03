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
    capabilities: [], // Replaced by projectModules
    projectModules: [
      {
        titleKey: 'ticketing.module.events.title',
        features: [
          'ticketing.cap.events.1',
          'ticketing.cap.events.2',
          'ticketing.cap.events.3'
        ]
      },
      {
        titleKey: 'ticketing.module.sales.title',
        features: [
          'ticketing.cap.sales.1',
          'ticketing.cap.sales.2',
          'ticketing.cap.sales.3'
        ]
      },
      {
        titleKey: 'ticketing.module.payments.title',
        features: [
          'ticketing.cap.pay.1',
          'ticketing.cap.pay.2',
          'ticketing.cap.pay.3'
        ]
      },
      {
        titleKey: 'ticketing.module.reporting.title',
        features: [
          'ticketing.cap.rep.1',
          'ticketing.cap.rep.2',
          'ticketing.cap.rep.3'
        ]
      }
    ],
    impacts: [
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
    capabilities: [], // Replaced by projectModules
    projectModules: [
      {
        titleKey: 'ecommerce.module.sales.title',
        features: [
          'ecommerce.cap.sales.1',
          'ecommerce.cap.sales.2',
          'ecommerce.cap.sales.3',
          'ecommerce.cap.sales.4'
        ]
      },
      {
        titleKey: 'ecommerce.module.payments.title',
        features: [
          'ecommerce.cap.pay.1',
          'ecommerce.cap.pay.2',
          'ecommerce.cap.pay.3'
        ]
      },
      {
        titleKey: 'ecommerce.module.stock.title',
        features: [
          'ecommerce.cap.stock.1',
          'ecommerce.cap.stock.2',
          'ecommerce.cap.stock.3'
        ]
      },
      {
        titleKey: 'ecommerce.module.reporting.title',
        features: [
          'ecommerce.cap.rep.1',
          'ecommerce.cap.rep.2',
          'ecommerce.cap.rep.3'
        ]
      }
    ],
    impacts: [
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
    capabilities: [], // Replaced by projectModules for detail view
    projectModules: [
      {
        titleKey: 'hrfinance.module.hr.title',
        features: [
          'hrfinance.cap.hr.1',
          'hrfinance.cap.hr.2',
          'hrfinance.cap.hr.3',
          'hrfinance.cap.hr.4'
        ]
      },
      {
        titleKey: 'hrfinance.module.finance.title',
        features: [
          'hrfinance.cap.acc.1',
          'hrfinance.cap.acc.2',
          'hrfinance.cap.acc.3',
          'hrfinance.cap.rep.1',
          'hrfinance.cap.rep.3'
        ]
      }
    ],
    impacts: [
      'hrfinance.value.1', 'hrfinance.value.2', 'hrfinance.value.3', 'hrfinance.value.4'
    ],
    seoTitle: 'Système de Gestion RH & Finance',
    seoDescription: 'Centralisez vos opérations internes avec notre solution intégrée RH et Finance.'
  }
];
