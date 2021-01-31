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
        path: 'home-product',
        loadChildren: () => import('./components/pages/home-blog/home-blog.module').then(m => m.HomeBlogModule)
      },
      {
        path: 'product-post/:id',
        component: DetailsPostComponent
      },
    ]
  },

  { path: 'product-admin', loadChildren: () => import('./components/blog-admin/blog-admin.module').then(m => m.BlogAdminModule) },
  { path: 'product-login', loadChildren: () => import('./components/blog-login/blog-login.module').then(m => m.BlogLoginModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'upload-image', loadChildren: () => import('./shared/components/upload-image/upload-image.module').then(m => m.UploadImageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
