export type Language = 'fr' | 'en';

export interface TranslationEntry {
  fr: string;
  en: string;
}

export interface Translations {
  [key: string]: TranslationEntry;
}

export const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.solutions': { fr: 'Solutions', en: 'Solutions' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'nav.cta': { fr: 'Démarrer un projet', en: 'Start a project' },

  // Hero
  'hero.title': { fr: 'Solutions digitales pour entreprises', en: 'Digital solutions for businesses' },
  'hero.subtitle': { fr: 'Nous développons des systèmes sur mesure qui transforment votre activité. De la gestion commerciale aux plateformes e-commerce.', en: 'We develop custom systems that transform your business. From commercial management to e-commerce platforms.' },
  'hero.cta.primary': { fr: 'Discuter de votre projet', en: 'Discuss your project' },
  'hero.cta.secondary': { fr: 'Voir nos réalisations', en: 'See our work' },

  // Stats
  'stats.projects': { fr: 'Projets livrés', en: 'Projects delivered' },
  'stats.years': { fr: 'Années d\'expérience', en: 'Years of experience' },
  'stats.satisfaction': { fr: 'Satisfaction client', en: 'Client satisfaction' },

  // Solutions
  'solutions.title': { fr: 'Nos solutions', en: 'Our solutions' },
  'solutions.subtitle': { fr: 'Des systèmes robustes conçus pour durer et évoluer avec votre entreprise.', en: 'Robust systems designed to last and evolve with your business.' },

  'solutions.web.title': { fr: 'Développement Web', en: 'Web Development' },
  'solutions.web.desc': { fr: 'Applications web modernes, performantes et évolutives.', en: 'Modern, performant and scalable web applications.' },

  'solutions.mobile.title': { fr: 'Applications Mobiles', en: 'Mobile Applications' },
  'solutions.mobile.desc': { fr: 'Apps natives et cross-platform pour iOS et Android.', en: 'Native and cross-platform apps for iOS and Android.' },

  'solutions.business.title': { fr: 'Logiciels Métier', en: 'Business Software' },
  'solutions.business.desc': { fr: 'Systèmes sur mesure pour optimiser vos processus.', en: 'Custom systems to optimize your processes.' },

  // Projects
  'projects.title': { fr: 'Nos plateformes', en: 'Our Platforms' },
  'projects.subtitle': { fr: 'Des systèmes d\'entreprise déployés en production, conçus pour la fiabilité opérationnelle.', en: 'Enterprise systems deployed in production, designed for operational reliability.' },
  'projects.view': { fr: 'Voir le projet', en: 'View project' },
  'projects.overview': { fr: 'Vue d\'ensemble', en: 'Overview' },
  'projects.capabilities': { fr: 'Fonctionnalités clés', en: 'Core Capabilities' },
  'projects.impact': { fr: 'Impact métier', en: 'Business Impact' },
  'projects.deployed': { fr: 'Déployé chez', en: 'Deployed at' },
  'projects.ownership': { fr: 'Plateforme propriétaire', en: 'Owned Platform' },

  // AURA AUTO - Simplified Business Focus
  'auraauto.title': { fr: 'AURA AUTO', en: 'AURA AUTO' },
  'auraauto.tagline': { fr: 'Plateforme de gestion commerciale automobile', en: 'Automotive Commercial Management Platform' },
  'auraauto.overview': { 
    fr: 'Plateforme de gestion commerciale et véhicules conçue pour digitaliser les opérations des concessionnaires.', 
    en: 'Commercial and vehicle management platform designed to digitize dealership operations.' 
  },
  'auraauto.deployed': { fr: 'FOTON SFAX, JAC MOTORS SFAX', en: 'FOTON SFAX, JAC MOTORS SFAX' },

  // AURA AUTO Capabilities
  'auraauto.cap.1': { fr: 'Gestion des clients', en: 'Client management' },
  'auraauto.cap.2': { fr: 'Suivi des véhicules et stocks', en: 'Vehicle & stock tracking' },
  'auraauto.cap.3': { fr: 'Gestion des ventes et factures', en: 'Sales & invoice management' },
  'auraauto.cap.4': { fr: 'Contrôle d\'accès basé sur les rôles', en: 'Role-based access control' },
  'auraauto.cap.5': { fr: 'Contrôle des autorisations de remise', en: 'Discount authorization control' },
  'auraauto.cap.6': { fr: 'Rapports commerciaux', en: 'Business reporting' },

  // AURA AUTO Impact
  'auraauto.impact.1': { fr: 'Remplace le suivi Excel manuel', en: 'Replaces manual Excel tracking' },
  'auraauto.impact.2': { fr: 'Opérations centralisées du concessionnaire', en: 'Centralized dealership operations' },
  'auraauto.impact.3': { fr: 'Workflow structuré', en: 'Structured workflow' },
  'auraauto.impact.4': { fr: 'Évolutif multi-marques', en: 'Multi-brand scalable' },

  // AURA DELIVERY - Simplified Business Focus
  'delivery.title': { fr: 'AURA DELIVERY', en: 'AURA DELIVERY' },
  'delivery.tagline': { fr: 'Plateforme de gestion logistique', en: 'Delivery Management Platform' },
  'delivery.overview': { 
    fr: 'Plateforme de gestion des livraisons et de la logistique centralisant les opérations et les workflows financiers.', 
    en: 'Delivery and logistics management platform centralizing operations and financial workflows.' 
  },
  'delivery.deployed': { fr: 'RS Delivery', en: 'RS Delivery' },

  // AURA DELIVERY Capabilities
  'delivery.cap.1': { fr: 'Création et suivi des expéditions', en: 'Shipment creation & tracking' },
  'delivery.cap.2': { fr: 'Gestion des rôles admin et livreur', en: 'Admin & courier role management' },
  'delivery.cap.3': { fr: 'Suivi des paiements et COD', en: 'COD & payment tracking' },
  'delivery.cap.4': { fr: 'Mises à jour de livraison par scan', en: 'Scan-based delivery updates' },
  'delivery.cap.5': { fr: 'Gestion de l\'historique financier', en: 'Financial history management' },

  // AURA DELIVERY Impact
  'delivery.impact.1': { fr: 'Traçabilité des livraisons en temps réel', en: 'Real-time delivery traceability' },
  'delivery.impact.2': { fr: 'Transparence financière', en: 'Financial transparency' },
  'delivery.impact.3': { fr: 'Workflow logistique structuré', en: 'Structured logistics workflow' },
  'delivery.impact.4': { fr: 'Efficacité opérationnelle', en: 'Operational efficiency' },

  // Ticketing System
  'ticketing.title': { fr: 'Système de Billetterie', en: 'Ticketing System' },
  'ticketing.tagline': { fr: 'Plateforme de vente de billets en ligne', en: 'Online ticket sales platform' },
  'ticketing.overview': { 
    fr: 'Plateforme de vente de billets avec tableau de bord administrateur, suivi sécurisé des ventes et monitoring des revenus.', 
    en: 'Ticket sales platform with admin dashboard, secure sales tracking and revenue monitoring.' 
  },
  'ticketing.feature.1': { fr: 'Vente de billets en ligne', en: 'Online ticket selling' },
  'ticketing.feature.2': { fr: 'Tableau de bord administrateur', en: 'Admin dashboard' },
  'ticketing.feature.3': { fr: 'Suivi sécurisé des ventes', en: 'Secure sales tracking' },
  'ticketing.feature.4': { fr: 'Monitoring des revenus', en: 'Revenue monitoring' },

  // E-commerce
  'ecommerce.title': { fr: 'Solutions E-Commerce', en: 'E-Commerce Solutions' },
  'ecommerce.tagline': { fr: 'Plateformes commerciales personnalisables', en: 'Customizable Commercial Platforms' },
  'ecommerce.overview': { 
    fr: 'Plateformes commerciales évolutives, adaptables à plusieurs industries, avec gestion sécurisée des transactions.', 
    en: 'Scalable commercial platforms, adaptable to multiple industries, with secure transaction handling.' 
  },
  'ecommerce.feature.1': { fr: 'Plateformes évolutives sur mesure', en: 'Custom scalable platforms' },
  'ecommerce.feature.2': { fr: 'Adaptables à plusieurs industries', en: 'Adaptable to multiple industries' },
  'ecommerce.feature.3': { fr: 'Gestion sécurisée des transactions', en: 'Secure transaction handling' },

  // HR & Finance Management System - NEW
  'hrfinance.title': { fr: 'Système RH & Finance', en: 'HR & Finance Management System' },
  'hrfinance.tagline': { fr: 'Gestion interne centralisée', en: 'Centralized Internal Management' },
  'hrfinance.overview': { 
    fr: 'Solution de gestion interne structurée pour centraliser les opérations RH, les workflows comptables et le suivi financier de l\'entreprise.', 
    en: 'Structured internal management solution to centralize HR operations, accounting workflows and company financial tracking.' 
  },

  // HR & Finance Capabilities
  'hrfinance.cap.hr': { fr: 'Gestion des Ressources Humaines', en: 'Human Resources Management' },
  'hrfinance.cap.hr.1': { fr: 'Profils et contrats employés', en: 'Employee profile and contract management' },
  'hrfinance.cap.hr.2': { fr: 'Suivi des congés et absences', en: 'Leave and absence tracking' },
  'hrfinance.cap.hr.3': { fr: 'Workflows d\'approbation RH', en: 'HR approval workflows' },
  'hrfinance.cap.hr.4': { fr: 'Structuration des rôles et permissions', en: 'Role and permission structuring' },

  'hrfinance.cap.accounting': { fr: 'Workflow Comptable & Financier', en: 'Accounting & Financial Workflow' },
  'hrfinance.cap.acc.1': { fr: 'Suivi des factures (émises & reçues)', en: 'Invoice tracking (issued & received)' },
  'hrfinance.cap.acc.2': { fr: 'Monitoring des paiements et dépenses', en: 'Payment and expense monitoring' },
  'hrfinance.cap.acc.3': { fr: 'Structuration des tâches comptables', en: 'Accountant task structuring' },
  'hrfinance.cap.acc.4': { fr: 'Processus de validation financière', en: 'Financial validation process' },

  'hrfinance.cap.reporting': { fr: 'Gestion & Reporting', en: 'Management & Reporting' },
  'hrfinance.cap.rep.1': { fr: 'Tableaux de bord revenus et dépenses', en: 'Revenue and expense dashboards' },
  'hrfinance.cap.rep.2': { fr: 'Statistiques opérationnelles', en: 'Operational statistics' },
  'hrfinance.cap.rep.3': { fr: 'Suivi de performance financière', en: 'Financial performance tracking' },
  'hrfinance.cap.rep.4': { fr: 'Visibilité niveau exécutif', en: 'Executive-level visibility' },

  // HR & Finance Value
  'hrfinance.value.1': { fr: 'Élimine le suivi fragmenté RH et comptable', en: 'Eliminates fragmented HR and accounting tracking' },
  'hrfinance.value.2': { fr: 'Améliore l\'organisation des processus internes', en: 'Improves internal process organization' },
  'hrfinance.value.3': { fr: 'Renforce le contrôle financier', en: 'Strengthens financial control' },
  'hrfinance.value.4': { fr: 'Supporte les décisions basées sur les données', en: 'Supports data-driven management decisions' },

  // About
  'about.title': { fr: 'À propos d\'Aura Dynamic', en: 'About Aura Dynamic' },
  'about.mission.title': { fr: 'Notre mission', en: 'Our mission' },
  'about.mission.desc': { fr: 'Accompagner les entreprises dans leur transformation digitale en développant des solutions sur mesure, fiables et évolutives.', en: 'Support businesses in their digital transformation by developing custom, reliable and scalable solutions.' },
  'about.vision.title': { fr: 'Notre vision', en: 'Our vision' },
  'about.vision.desc': { fr: 'Devenir le partenaire technologique de référence pour les entreprises qui recherchent excellence et fiabilité.', en: 'Become the reference technology partner for businesses seeking excellence and reliability.' },
  'about.approach.title': { fr: 'Notre approche', en: 'Our approach' },
  'about.approach.desc': { fr: 'Nous croyons en des partenariats durables. Chaque projet est une collaboration étroite avec nos clients pour comprendre leurs besoins et dépasser leurs attentes.', en: 'We believe in lasting partnerships. Every project is a close collaboration with our clients to understand their needs and exceed their expectations.' },
  'about.values.title': { fr: 'Nos valeurs', en: 'Our values' },
  'about.value1.title': { fr: 'Excellence', en: 'Excellence' },
  'about.value1.desc': { fr: 'Nous visons la qualité dans chaque ligne de code.', en: 'We strive for quality in every line of code.' },
  'about.value2.title': { fr: 'Fiabilité', en: 'Reliability' },
  'about.value2.desc': { fr: 'Des systèmes robustes qui fonctionnent 24/7.', en: 'Robust systems that work 24/7.' },
  'about.value3.title': { fr: 'Partenariat', en: 'Partnership' },
  'about.value3.desc': { fr: 'Une relation de confiance sur le long terme.', en: 'A trusting relationship for the long term.' },

  // Contact
  'contact.title': { fr: 'Discutons de votre projet', en: 'Let\'s discuss your project' },
  'contact.subtitle': { fr: 'Prêt à transformer votre activité ? Contactez-nous et nous vous répondrons sous 48 heures.', en: 'Ready to transform your business? Contact us and we will respond within 48 hours.' },
  'contact.form.name': { fr: 'Nom', en: 'Name' },
  'contact.form.email': { fr: 'Email', en: 'Email' },
  'contact.form.company': { fr: 'Entreprise', en: 'Company' },
  'contact.form.message': { fr: 'Votre projet', en: 'Your project' },
  'contact.form.submit': { fr: 'Envoyer', en: 'Send' },
  'contact.form.sending': { fr: 'Envoi en cours...', en: 'Sending...' },

  // Contact Info Sections
  'contact.info.location': { fr: 'Adresse', en: 'Address' },
  'contact.info.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.info.email': { fr: 'Email', en: 'Email' },
  'contact.info.availability': { fr: 'Disponibilité', en: 'Availability' },
  'contact.info.availability.desc': { fr: 'Nous acceptons de nouveaux projets pour le T2 2026', en: 'We are accepting new projects for Q2 2026' },
  'contact.info.response': { fr: 'Délai de réponse', en: 'Response time' },
  'contact.info.response.desc': { fr: 'Sous 48 heures ouvrées', en: 'Within 48 business hours' },
  'contact.info.follow': { fr: 'Suivez-nous', en: 'Follow us' },

  // Company Address
  'company.address.line1': { fr: 'Route Mahdia, Rue Cheikh Megdich', en: 'Route Mahdia, Rue Cheikh Megdich' },
  'company.address.line2': { fr: 'Sfax, Tunisie', en: 'Sfax, Tunisia' },
  'company.phone': { fr: '95653183', en: '95653183' },
  'company.email': { fr: 'aura.dynamic.contact@gmail.com', en: 'aura.dynamic.contact@gmail.com' },

  // Social Links
  'social.facebook': { fr: 'Facebook', en: 'Facebook' },
  'social.instagram': { fr: 'Instagram', en: 'Instagram' },
  'social.linkedin': { fr: 'LinkedIn', en: 'LinkedIn' },

  // Validation
  'validation.required': { fr: 'Ce champ est obligatoire', en: 'This field is required' },
  'validation.email.invalid': { fr: 'Veuillez entrer une adresse email valide', en: 'Please enter a valid email address' },
  'validation.message.too_short': { fr: 'Le message doit contenir au moins 10 caractères', en: 'The message must be at least 10 characters' },
  'validation.name.too_long': { fr: 'Le nom est trop long', en: 'The name is too long' },
  'validation.failed': { fr: 'La validation a échoué', en: 'Validation failed' },
  'validation.server_error': { fr: 'Erreur serveur, veuillez réessayer plus tard', en: 'Server error, please try again later' },
  'validation.connection_error': { fr: 'Impossible de contacter le serveur', en: 'Unable to contact the server' },

  // Footer
  'footer.tagline': { fr: 'Solutions digitales, conçues comme des produits.', en: 'Digital solutions, built like products.' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.privacy': { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
  'footer.terms': { fr: 'Conditions d\'utilisation', en: 'Terms of Service' },

  // Process
  'process.title': { fr: 'Notre processus', en: 'Our process' },
  'process.step1.title': { fr: 'Découverte', en: 'Discovery' },
  'process.step1.desc': { fr: 'Analyse de vos besoins et définition du périmètre', en: 'Analysis of your needs and scope definition' },
  'process.step2.title': { fr: 'Conception', en: 'Design' },
  'process.step2.desc': { fr: 'Architecture et maquettes', en: 'Architecture and mockups' },
  'process.step3.title': { fr: 'Développement', en: 'Development' },
  'process.step3.desc': { fr: 'Construction itérative du système', en: 'Iterative system construction' },
  'process.step4.title': { fr: 'Déploiement', en: 'Deployment' },
  'process.step4.desc': { fr: 'Mise en production et support', en: 'Production deployment and support' },

  // Technologies
  'tech.title': { fr: 'Technologies utilisées', en: 'Technologies we use' },

  // Featured
  'featured.label': { fr: 'Solution phare', en: 'Featured solution' },
  'featured.solutions': { fr: 'Nos solutions phares', en: 'Our flagship solutions' },

  // Common
  'common.seeAll': { fr: 'Voir tout', en: 'See all' },
  'common.learnMore': { fr: 'En savoir plus', en: 'Learn more' },
};
