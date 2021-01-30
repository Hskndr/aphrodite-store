import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, AboutComponent } from './components';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';

const routes: Routes = [

  // Users
  {
    path: 'suscriptor',
    loadChildren: () => import('./modules/suscriptor/suscriptor.module')
      .then(m => m.SuscriptorModule),
    canActivate: [CanSuscriptorGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
      .then(m => m.AdminModule),
    canActivate: [CanAdminGuard]
  },
  {
    path: 'editor',
    loadChildren: () => import('./modules/editor/editor.module')
      .then(m => m.EditorModule),
    canActivate: [CanEditGuard]
  },
  // Auth
  /* {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module')
      .then(m => m.ForgotPasswordModule)
  }, */
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module')
      .then(m => m.LoginModule)
  },
 /*  {
    path: 'register',
    loadChildren: () => import('./auth/lregister/lregister.module')
      .then(m => m.LregisterModule)
  }, */
  /* {
    path: 'verification-email',
    component: SendEmailComponent
  }, */


  // Blog
  {
    path: 'product',
    loadChildren: () => import('./modules/blog/blog.module')
      .then(m => m.BlogModule)
  },

  // Shell
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
