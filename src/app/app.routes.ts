import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Aura Dynamic - Solutions Digitales pour Entreprises',
    data: {
      seo: {
        title: 'Solutions Digitales pour Entreprises',
        description: 'Aura Dynamic développe des systèmes sur mesure qui transforment votre activité. Découvrez AURA AUTO et AURA DELIVERY, nos solutions phares.'
      }
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'À Propos - Aura Dynamic',
    data: {
      seo: {
        title: 'À Propos',
        description: 'Découvrez Aura Dynamic, notre mission, notre vision et notre approche du développement de solutions digitales fiables et évolutives.'
      }
    }
  },
  {
    path: 'solutions',
    loadComponent: () => import('./features/solutions/solutions.component').then(m => m.SolutionsComponent),
    title: 'Nos Solutions - Aura Dynamic',
    data: {
      seo: {
        title: 'Nos Solutions',
        description: 'Développement web, applications mobiles et logiciels métier sur mesure. Des systèmes robustes conçus pour durer.'
      }
    }
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/projects/projects-list/projects-list.component').then(m => m.ProjectsListComponent),
        title: 'Nos Plateformes - Aura Dynamic',
        data: {
          seo: {
            title: 'Nos Projets & Plateformes',
            description: 'Découvrez nos solutions phares AURA AUTO et AURA DELIVERY, ainsi que nos réalisations sur mesure.'
          }
        }
      },
      {
        path: ':slug',
        loadComponent: () => import('./features/projects/projects-detail/projects-detail.component').then(m => m.ProjectDetailComponent)
      }
    ]
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact - Aura Dynamic',
    data: {
      seo: {
        title: 'Contact',
        description: 'Prêt à transformer votre activité ? Contactez Aura Dynamic et nous vous répondrons sous 48 heures.'
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
