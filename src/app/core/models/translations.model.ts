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
  'hero.title': { fr: 'Solutions digitales pour automatiser vos opérations', en: 'Digital solutions to automate your operations' },
  'hero.subtitle': { fr: 'Nous concevons des systèmes métiers adaptés à votre activité.', en: 'We design business systems tailored to your activity.' },
  'hero.support': { fr: 'Gestion commerciale · Logistique · E-commerce · Outils internes', en: 'Business Management · Logistics · E-commerce · Internal Tools' },
  'hero.cta.primary': { fr: 'Démarrer un projet', en: 'Start a project' },
  'hero.cta.secondary': { fr: 'Voir nos plateformes', en: 'View our platforms' },

  // Stats
  'stats.projects': { fr: 'Projets livrés', en: 'Projects delivered' },
  'stats.years': { fr: 'Années d\'expérience', en: 'Years of experience' },
  'stats.satisfaction': { fr: 'Satisfaction client', en: 'Client satisfaction' },

  // Solutions
  'solutions.title': { fr: 'Nos solutions', en: 'Our solutions' },
  'solutions.subtitle': { fr: 'Des systèmes conçus pour structurer, automatiser et connecter vos opérations.', en: 'Systems designed to structure, automate and connect your operations.' },

  'solutions.platforms.title': { fr: 'Plateformes métiers', en: 'Business Platforms' },
  'solutions.platforms.desc': { fr: 'Systèmes sur mesure pour gérer vos opérations internes : gestion commerciale, RH, finance et outils internes.', en: 'Custom systems to manage your internal operations: commercial management, HR, finance and internal tools.' },

  'solutions.ecommerce.title': { fr: 'Systèmes e-commerce', en: 'E-commerce Systems' },
  'solutions.ecommerce.desc': { fr: 'Vente en ligne avec gestion complète : commandes, stock, paiements et suivi client.', en: 'Online sales with complete management: orders, stock, payments and customer tracking.' },

  'solutions.operational.title': { fr: 'Applications opérationnelles', en: 'Operational Applications' },
  'solutions.operational.desc': { fr: 'Outils connectés pour vos équipes terrain : livraisons, agents, réservations et suivi en temps réel.', en: 'Connected tools for your field teams: deliveries, agents, bookings and real-time tracking.' },
  'solutions.explore': { fr: 'Explorer nos solutions', en: 'Explore our solutions' },

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
  'auraauto.tagline': { fr: 'Système de gestion commerciale pour concessionnaires automobiles', en: 'Commercial management system for car dealerships' },
  'auraauto.overview': { 
    fr: 'Centralisez vos ventes, vos véhicules, vos devis et votre facturation, tout en conservant vos échanges Excel.', 
    en: 'Centralize your sales, vehicles, quotes and invoicing, while maintaining your Excel exchanges.' 
  },
  'auraauto.deployed': { fr: 'FOTON SFAX · JAC MOTORS SFAX', en: 'FOTON SFAX · JAC MOTORS SFAX' },

  // ... (cap and impact keys removed for brevity in this specific update as they are used elsewhere, keeping overview/tagline)

  // AURA DELIVERY - Simplified Business Focus
  'delivery.title': { fr: 'AURA DELIVERY', en: 'AURA DELIVERY' },
  'delivery.tagline': { fr: 'Système de gestion des livraisons et de la logistique', en: 'Delivery and logistics management system' },
  'delivery.overview': { 
    fr: 'Centralisez le suivi des livraisons, automatisez les opérations et connectez vos flux logistiques et financiers dans une plateforme unique.', 
    en: 'Centralize delivery tracking, automate operations and connect your logistics and financial flows in a single platform.' 
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
  'about.mission.desc': { fr: 'Concevoir des systèmes métiers qui permettent aux entreprises de structurer, automatiser et piloter leurs opérations au quotidien.', en: 'Designing business systems that enable companies to structure, automate and manage their daily operations.' },
  'about.vision.title': { fr: 'Notre vision', en: 'Our vision' },
  'about.vision.desc': { fr: 'Aider les entreprises à passer d’outils dispersés à des systèmes centralisés, fiables et évolutives, capables de soutenir leur croissance.', en: 'Helping companies move from scattered tools to centralized, reliable and scalable systems capable of supporting their growth.' },
  'about.approach.title': { fr: 'Notre approche', en: 'Our approach' },
  'about.approach.desc': { 
    fr: 'Chaque projet commence par une compréhension concrète de vos opérations : vos processus, vos outils actuels et vos contraintes métier.\n\nNous concevons ensuite des systèmes adaptés à votre activité, pensés pour être utilisés au quotidien et évoluer avec votre entreprise.', 
    en: 'Every project begins with a concrete understanding of your operations: your processes, current tools, and business constraints.\n\nWe then design systems tailored to your activity, built for daily use and to evolve with your company.' 
  },
  'about.values.title': { fr: 'Nos valeurs', en: 'Our values' },
  'about.value1.title': { fr: 'Fiabilité des systèmes', en: 'System Reliability' },
  'about.value1.desc': { fr: 'Nous concevons des systèmes robustes, pensés pour fonctionner en continu et supporter les opérations critiques des entreprises.', en: 'We design robust systems, built to run continuously and support critical business operations.' },
  'about.value2.title': { fr: 'Clarté opérationnelle', en: 'Operational Clarity' },
  'about.value2.desc': { fr: 'Nos solutions sont conçues pour structurer vos processus et vous donner une visibilité claire sur votre activité.', en: 'Our solutions are designed to structure your processes and give you clear visibility over your business.' },
  'about.value3.title': { fr: 'Approche métier', en: 'Business Approach' },
  'about.value3.desc': { fr: 'Chaque système est construit à partir de vos besoins réels : vos opérations, vos contraintes et votre façon de travailler.', en: 'Every system is built based on your real needs: your operations, constraints, and way of working.' },

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
  'contact.info.availability.desc': { 
    fr: `Nous acceptons de nouveaux projets pour le T2 ${new Date().getFullYear()}`, 
    en: `We are accepting new projects for Q2 ${new Date().getFullYear()}` 
  },
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

  // Categories
  'category.automotive': { fr: 'Automotive', en: 'Automotive' },
  'category.logistics': { fr: 'Logistics', en: 'Logistics' },

  // Validation
  'validation.required': { fr: 'Ce champ est obligatoire', en: 'This field is required' },
  'validation.email.invalid': { fr: 'Veuillez entrer une adresse email valide', en: 'Please enter a valid email address' },
  'validation.message.too_short': { fr: 'Le message doit contenir au moins 10 caractères', en: 'The message must be at least 10 characters' },
  'validation.name.too_long': { fr: 'Le nom est trop long', en: 'The name is too long' },
  'validation.failed': { fr: 'La validation a échoué', en: 'Validation failed' },
  'validation.server_error': { fr: 'Erreur serveur, veuillez réessayer plus tard', en: 'Server error, please try again later' },
  'validation.connection_error': { fr: 'Impossible de contacter le serveur', en: 'Unable to contact the server' },

  // Footer
  'footer.tagline': { fr: 'Des systèmes conçus pour automatiser et structurer vos opérations.', en: 'Systems designed to automate and structure your operations.' },
  'footer.tagline.sub': { fr: 'Systèmes utilisés en production par des entreprises.', en: 'Systems used in production by companies.' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.privacy': { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
  'footer.terms': { fr: 'Conditions d\'utilisation', en: 'Terms of Service' },
  'footer.backToTop': { fr: 'Retour en haut', en: 'Back to top' },
  'footer.navigation': { fr: 'Navigation', en: 'Navigation' },
  'footer.response': { fr: 'Réponse sous 48h', en: 'Response within 48h' },

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

  // Home Pain & Stats
  'home.pain.title': { fr: 'Vos opérations sont encore gérées manuellement ?', en: 'Are your operations still managed manually?' },
  'home.pain.description': { 
    fr: 'Facturation et devis dispersés, suivi des livraisons difficile, outils non connectés, manque de visibilité sur votre activité...', 
    en: 'Scattered invoices and quotes, difficult delivery tracking, disconnected tools, lack of visibility over your business...' 
  },
  'home.pain.solution': { fr: 'Nous concevons des systèmes qui centralisent, automatisent et structurent l’ensemble de vos opérations.', en: 'We build systems that centralize, automate, and structure your operations.' },
  'home.stats.systems': { fr: '8+ systèmes déployés', en: '8+ systems deployed' },
  'home.stats.sectors': { fr: '3 secteurs d’activité', en: '3 business sectors' },
  'home.stats.production': { fr: 'En production chez plusieurs entreprises', en: 'Running in production across multiple companies' },
};
