import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogAdminComponent } from './blog-admin.component';
import { AuthBlogGuard } from '../../shared/guards/auth-blog.guard';
import { MsgDetailComponent } from './message/msg-detail/msg-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogAdminComponent,
    canActivate: [AuthBlogGuard],
    children: [
      {
        path: 'posts',
        loadChildren: () => import('../posts/list-posts/list-posts.module').then(
          m => m.ListPostsModule
        )
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(
          m => m.ProfileModule
        )
      },
      {
        path: 'message',
        loadChildren: () => import('./message/message.module').then(
          m => m.MessageModule
        )
      },
      {
        path: 'msg-detail/:id',
        component: MsgDetailComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogAdminRoutingModule { }
