import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'home-blog',
        loadChildren: () => import('./components/pages/home-blog/home-blog.module').then(m => m.HomeBlogModule)
      },
      {
        path: 'blog-post/:id',
        component: DetailsPostComponent
      },
    ]
  },

  { path: 'blog-admin', loadChildren: () => import('./components/blog-admin/blog-admin.module').then(m => m.BlogAdminModule) },
  { path: 'blog-login', loadChildren: () => import('./components/blog-login/blog-login.module').then(m => m.BlogLoginModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
