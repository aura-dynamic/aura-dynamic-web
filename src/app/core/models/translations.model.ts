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
  'nav.cta': { fr: 'Démarrer mon projet', en: 'Start my project' },

  // Hero
  'hero.title': { fr: 'Solutions digitales pour automatiser vos opérations', en: 'Digital solutions to automate your operations' },
  'hero.subtitle': { fr: 'Nous concevons des systèmes métiers adaptés à votre activité.', en: 'We design business systems tailored to your activity.' },
  'hero.support': { fr: 'Gestion commerciale · Logistique · E-commerce · Outils internes', en: 'Business Management · Logistics · E-commerce · Internal Tools' },
  'hero.cta.primary': { fr: 'Démarrer mon projet', en: 'Start my project' },
  'hero.cta.secondary': { fr: 'Voir nos plateformes', en: 'View our platforms' },

  // Stats
  'stats.projects': { fr: 'Projets livrés', en: 'Projects delivered' },
  'stats.years': { fr: 'Années d\'expérience', en: 'Years of experience' },
  'stats.satisfaction': { fr: 'Satisfaction client', en: 'Client satisfaction' },

  // Solutions
  'solutions.title': { fr: 'Nos solutions', en: 'Our solutions' },
  'solutions.subtitle': { fr: 'Des systèmes conçus pour structurer, automatiser et connecter vos opérations.', en: 'Systems designed to structure, automate and connect your operations.' },

  'solutions.platforms.title': { fr: 'Plateformes métiers', en: 'Business Platforms' },
  'solutions.platforms.desc': { fr: 'Systèmes sur mesure pour gérer vos opérations internes.', en: 'Custom systems to manage your internal operations.' },
  'solutions.platforms.feat1': { fr: 'Gestion commerciale', en: 'Commercial Management' },
  'solutions.platforms.feat2': { fr: 'RH & finance', en: 'HR & Finance' },
  'solutions.platforms.feat3': { fr: 'Outils internes', en: 'Internal Tools' },

  'solutions.ecommerce.title': { fr: 'Systèmes e-commerce', en: 'E-commerce Systems' },
  'solutions.ecommerce.desc': { fr: 'Vente en ligne avec gestion complète.', en: 'Online sales with complete management.' },
  'solutions.ecommerce.feat1': { fr: 'Gestion des commandes', en: 'Order Management' },
  'solutions.ecommerce.feat2': { fr: 'Suivi du stock', en: 'Stock Tracking' },
  'solutions.ecommerce.feat3': { fr: 'Paiements & clients', en: 'Payments & Clients' },

  'solutions.operational.title': { fr: 'Applications opérationnelles', en: 'Operational Applications' },
  'solutions.operational.desc': { fr: 'Outils connectés pour vos équipes terrain.', en: 'Connected tools for your field teams.' },
  'solutions.operational.feat1': { fr: 'Suivi des livraisons', en: 'Delivery Tracking' },
  'solutions.operational.feat2': { fr: 'Applications agents', en: 'Agent Applications' },
  'solutions.operational.feat3': { fr: 'Réservations & suivi', en: 'Bookings & Tracking' },
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
    fr: 'Gestion des ventes, des véhicules, des devis et de la facturation dans un système centralisé.', 
    en: 'Management of sales, vehicles, quotes and invoicing in a centralized system.' 
  },
  'auraauto.deployed': { fr: 'FOTON SFAX · JAC MOTORS SFAX', en: 'FOTON SFAX · JAC MOTORS SFAX' },

  // AURA AUTO Capabilities
  'auraauto.cap.1': { fr: 'Gestion complète du stock de véhicules', en: 'Full vehicle stock management' },
  'auraauto.cap.2': { fr: 'Facturation et édition de devis', en: 'Invoicing and quote generation' },
  'auraauto.cap.3': { fr: 'Suivi des dossiers clients', en: 'Customer file tracking' },
  'auraauto.cap.4': { fr: 'Gestion des paiements et acomptes', en: 'Payment and deposit management' },
  'auraauto.cap.5': { fr: 'Statistiques de ventes en temps réel', en: 'Real-time sales statistics' },
  'auraauto.cap.6': { fr: 'Archivage sécurisé des données', en: 'Secure data archiving' },

  // AURA AUTO Impact
  'auraauto.impact.1': { fr: 'Centralisation des données commerciales', en: 'Centralization of commercial data' },
  'auraauto.impact.2': { fr: 'Réduction des erreurs de saisie', en: 'Reduction of entry errors' },
  'auraauto.impact.3': { fr: 'Gain de temps administratif', en: 'Administrative time savings' },
  'auraauto.impact.4': { fr: 'Meilleure visibilité sur le stock', en: 'Better stock visibility' },

  // AURA DELIVERY - Simplified Business Focus
  'delivery.title': { fr: 'AURA DELIVERY', en: 'AURA DELIVERY' },
  'delivery.tagline': { fr: 'Système de gestion des livraisons et de la logistique', en: 'Delivery and logistics management system' },
  'delivery.overview': { 
    fr: 'Suivi des livraisons, coordination des équipes et gestion des flux dans une plateforme unique.', 
    en: 'Delivery tracking, team coordination and flow management in a single platform.' 
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
    fr: 'Gestion des événements, des réservations et des paiements dans un système centralisé.', 
    en: 'Event management, bookings and payments in a centralized system.' 
  },

  // Ticketing Modules
  'ticketing.module.events.title': { fr: 'Gestion des événements', en: 'Event Management' },
  'ticketing.cap.events.1': { fr: 'Création et gestion des événements', en: 'Event creation & management' },
  'ticketing.cap.events.2': { fr: 'Paramétrage des billets et disponibilités', en: 'Ticket & availability settings' },
  'ticketing.cap.events.3': { fr: 'Gestion des places et quotas', en: 'Seat & quota management' },

  'ticketing.module.sales.title': { fr: 'Réservations & ventes', en: 'Reservations & Sales' },
  'ticketing.cap.sales.1': { fr: 'Vente de billets en ligne', en: 'Online ticket selling' },
  'ticketing.cap.sales.2': { fr: 'Gestion des réservations', en: 'Reservation management' },
  'ticketing.cap.sales.3': { fr: 'Suivi des commandes', en: 'Order tracking' },

  'ticketing.module.payments.title': { fr: 'Paiements & transactions', en: 'Payments & Transactions' },
  'ticketing.cap.pay.1': { fr: 'Paiements sécurisés', en: 'Secure payments' },
  'ticketing.cap.pay.2': { fr: 'Suivi des transactions', en: 'Transaction tracking' },
  'ticketing.cap.pay.3': { fr: 'Historique des ventes', en: 'Sales history' },

  'ticketing.module.reporting.title': { fr: 'Pilotage & suivi', en: 'Steering & Monitoring' },
  'ticketing.cap.rep.1': { fr: 'Tableau de bord administrateur', en: 'Admin dashboard' },
  'ticketing.cap.rep.2': { fr: 'Suivi des revenus', en: 'Revenue monitoring' },
  'ticketing.cap.rep.3': { fr: 'Statistiques des ventes', en: 'Sales statistics' },

  'ticketing.feature.1': { fr: 'Vente de billets en ligne', en: 'Online ticket selling' },
  'ticketing.feature.2': { fr: 'Tableau de bord administrateur', en: 'Admin dashboard' },
  'ticketing.feature.3': { fr: 'Suivi sécurisé des ventes', en: 'Secure sales tracking' },
  'ticketing.feature.4': { fr: 'Monitoring des revenus', en: 'Revenue monitoring' },

  // E-commerce
  'ecommerce.title': { fr: 'Solutions E-commerce', en: 'E-commerce Solutions' },
  'ecommerce.tagline': { fr: 'Plateformes commerciales personnalisables', en: 'Customizable Commercial Platforms' },
  'ecommerce.overview': { 
    fr: 'Système e-commerce permettant de gérer les commandes, le stock, les paiements et le suivi client dans une plateforme centralisée.', 
    en: 'E-commerce system allowing to manage orders, stock, payments and customer follow-up in a centralized platform.' 
  },

  // E-commerce Modules
  'ecommerce.module.sales.title': { fr: 'Gestion commerciale', en: 'Sales Management' },
  'ecommerce.cap.sales.1': { fr: 'Gestion des produits et du catalogue', en: 'Product and catalog management' },
  'ecommerce.cap.sales.2': { fr: 'Gestion des commandes', en: 'Order management' },
  'ecommerce.cap.sales.3': { fr: 'Suivi des clients', en: 'Customer tracking' },
  'ecommerce.cap.sales.4': { fr: 'Gestion des promotions', en: 'Promotion management' },

  'ecommerce.module.payments.title': { fr: 'Paiements & transactions', en: 'Payments & Transactions' },
  'ecommerce.cap.pay.1': { fr: 'Paiements sécurisés', en: 'Secure payments' },
  'ecommerce.cap.pay.2': { fr: 'Gestion des statuts de paiement', en: 'Payment status management' },
  'ecommerce.cap.pay.3': { fr: 'Historique des transactions', en: 'Transaction history' },

  'ecommerce.module.stock.title': { fr: 'Stock & logistique', en: 'Stock & Logistics' },
  'ecommerce.cap.stock.1': { fr: 'Gestion du stock', en: 'Stock management' },
  'ecommerce.cap.stock.2': { fr: 'Suivi des disponibilités', en: 'Availability tracking' },
  'ecommerce.cap.stock.3': { fr: 'Coordination des commandes', en: 'Order coordination' },

  'ecommerce.module.reporting.title': { fr: 'Pilotage & suivi', en: 'Steering & Monitoring' },
  'ecommerce.cap.rep.1': { fr: 'Tableaux de bord', en: 'Dashboards' },
  'ecommerce.cap.rep.2': { fr: 'Suivi des ventes', en: 'Sales tracking' },
  'ecommerce.cap.rep.3': { fr: 'Statistiques commerciales', en: 'Commercial statistics' },

  'ecommerce.feature.1': { fr: 'Plateformes évolutives sur mesure', en: 'Custom scalable platforms' },
  'ecommerce.feature.2': { fr: 'Adaptables à plusieurs industries', en: 'Adaptable to multiple industries' },
  'ecommerce.feature.3': { fr: 'Gestion sécurisée des transactions', en: 'Secure transaction handling' },

  // HR & Finance Management System - NEW
  'hrfinance.title': { fr: 'Système RH & Finance', en: 'HR & Finance Management System' },
  'hrfinance.tagline': { fr: 'Système interne de gestion centralisée', en: 'Centralized Internal Management System' },
  'hrfinance.overview': { 
    fr: 'Gestion des employés, des salaires et des opérations financières.', 
    en: 'Employee management, payroll and financial operations.' 
  },

  // HR & Finance Specific Detail
  'hrfinance.modules.title': { fr: 'Modules du système', en: 'System Modules' },
  'hrfinance.module.hr.title': { fr: 'Ressources humaines', en: 'Human Resources' },
  'hrfinance.module.finance.title': { fr: 'Finance', en: 'Finance' },
  'hrfinance.features.label': { fr: 'Fonctionnalités :', en: 'Features:' },

  // HR Capabilities
  'hrfinance.cap.hr.1': { fr: 'Gestion des dossiers employés', en: 'Employee file management' },
  'hrfinance.cap.hr.2': { fr: 'Suivi des congés et absences', en: 'Leave and absence tracking' },
  'hrfinance.cap.hr.3': { fr: 'Gestion de la paie et fiches de paie', en: 'Payroll and payslip management' },
  'hrfinance.cap.hr.4': { fr: 'Évaluation des performances', en: 'Performance evaluation' },

  // Finance/Accounting Capabilities
  'hrfinance.cap.acc.1': { fr: 'Comptabilité générale', en: 'General accounting' },
  'hrfinance.cap.acc.2': { fr: 'Gestion des flux de trésorerie', en: 'Cash flow management' },
  'hrfinance.cap.acc.3': { fr: 'Processus de validation financière', en: 'Financial validation process' },
  'hrfinance.cap.rep.1': { fr: 'Tableaux de bord revenus & dépenses', en: 'Revenue & expense dashboards' },
  'hrfinance.cap.rep.3': { fr: 'Suivi de performance financière', en: 'Financial performance tracking' },

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
  'contact.title': { fr: 'Démarrons votre projet', en: 'Let\'s start your project' },
  'contact.subtitle': { 
    fr: 'Décrivez votre besoin et voyons comment structurer vos opérations avec un système adapté.', 
    en: 'Describe your need and let\'s see how to structure your operations with a tailored system.' 
  },
  'contact.form.name': { fr: 'Nom', en: 'Name' },
  'contact.form.email': { fr: 'Email', en: 'Email' },
  'contact.form.company': { fr: 'Entreprise', en: 'Company' },
  'contact.form.message': { fr: 'Votre projet', en: 'Your project' },
  'contact.form.need': { fr: 'Type de besoin (optionnel)', en: 'Type of need (optional)' },
  'contact.form.submit': { fr: 'Démarrer mon projet', en: 'Start my project' },
  'contact.form.sending': { fr: 'Envoi en cours...', en: 'Sending...' },
  'contact.form.confidential': { 
    fr: 'Vos informations restent confidentielles. Nous vous recontactons rapidement.', 
    en: 'Your information remains confidential. We will get back to you shortly.' 
  },

  // Contact Info Sections
  'contact.info.location': { fr: 'Adresse', en: 'Address' },
  'contact.info.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.info.email': { fr: 'Email', en: 'Email' },
  'contact.info.availability': { fr: 'Disponibilité', en: 'Availability' },
  'contact.info.availability.desc': { 
    fr: 'Projets en cours — ouvert à de nouvelles collaborations', 
    en: 'Current projects — open to new collaborations' 
  },
  'contact.info.response': { fr: 'Délai de réponse', en: 'Response time' },
  'contact.info.response.desc': { 
    fr: 'Réponse sous 48h avec un premier retour sur votre besoin', 
    en: 'Response within 48h with an initial feedback on your need' 
  },
  'contact.info.follow': { fr: 'Suivez-nous', en: 'Follow us' },

  // Needs Categories
  'need.commercial': { fr: 'Gestion commerciale', en: 'Commercial management' },
  'need.logistics': { fr: 'Logistique / livraison', en: 'Logistics / delivery' },
  'need.ecommerce': { fr: 'E-commerce', en: 'E-commerce' },
  'need.internal': { fr: 'Système interne', en: 'Internal system' },
  'need.other': { fr: 'Autre', en: 'Other' },

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
  'category.business': { fr: 'Business', en: 'Business' },
  'category.ecommerce': { fr: 'E-commerce', en: 'E-commerce' },
  'category.internal': { fr: 'Système Interne', en: 'Internal System' },

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
  'process.step1.title': { fr: 'Analyse des opérations', en: 'Operations Analysis' },
  'process.step1.desc': { fr: 'Compréhension de vos processus et outils', en: 'Understanding your processes and tools' },
  'process.step2.title': { fr: 'Conception du système', en: 'System Design' },
  'process.step2.desc': { fr: 'Architecture et structuration des flux', en: 'Architecture and flow structuring' },
  'process.step3.title': { fr: 'Développement', en: 'Development' },
  'process.step3.desc': { fr: 'Construction itérative avec validation continue', en: 'Iterative construction with continuous validation' },
  'process.step4.title': { fr: 'Mise en production', en: 'Production Launch' },
  'process.step4.desc': { fr: 'Déploiement et accompagnement', en: 'Deployment and support' },

  // Technologies
  'tech.title': { fr: 'Technologies utilisées', en: 'Technologies we use' },

  // Featured
  'featured.label': { fr: 'Solution phare', en: 'Featured solution' },
  'featured.solutions': { fr: 'Nos solutions phares', en: 'Our flagship solutions' },

  // Projects CTA
  'projects.cta.title': { fr: 'Vous souhaitez structurer vos opérations ?', en: 'Do you want to structure your operations?' },
  'projects.cta.desc': { fr: 'Discutons de votre projet et voyons comment mettre en place un système adapté à votre activité.', en: 'Let\'s discuss your project and see how to set up a system adapted to your activity.' },
  'projects.cta.button': { fr: 'Démarrer mon projet', en: 'Start my project' },

  // Project Detail Specific
  'projects.detail.others': { fr: 'Autres systèmes', en: 'Other systems' },
  'projects.detail.cta.title': { fr: 'Besoin d’un système pour structurer vos opérations ?', en: 'Need a system to structure your operations?' },
  'projects.detail.cta.desc': { fr: 'Décrivons votre besoin et voyons comment mettre en place une solution adaptée.', en: 'Let\'s describe your need and see how to implement a tailored solution.' },
  'projects.detail.cta.button': { fr: 'Démarrer mon projet', en: 'Start my project' },

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
