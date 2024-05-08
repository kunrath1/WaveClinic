import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.routes').then(h => h.HOME_ROUTES)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.routes').then(a => a.ABOUT_ROUTES)
  },
  {
    path: 'blog',
    loadChildren: () => import('./components/blog/blog.routes').then(b => b.BLOG_ROUTES)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.routes').then(c => c.CONTACT_ROUTES)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./components/gallery/gallery.routes').then(g => g.GALLERY_ROUTES)
  },
  {
    path: 'treatments',
    loadChildren: () => import('./components/treatments/treatments.routes').then(p => p.TREATMENTS_ROUTES)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./components/testimonials/testimonials.routes').then(t => t.TESTIMONIALS_ROUTES)
  },
];