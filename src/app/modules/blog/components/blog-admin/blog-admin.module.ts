import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogAdminRoutingModule } from './blog-admin-routing.module';
import { BlogAdminComponent } from './blog-admin.component';
import { BlogModule } from '../../blog.module';
import { MaterialModule } from '../../../../material.module';
import { BlogToolbarComponent } from './blog-toolbar/blog-toolbar.component';


@NgModule({
  declarations: [BlogAdminComponent, BlogToolbarComponent],
  imports: [
    CommonModule,
    BlogAdminRoutingModule,
    BlogModule,
    MaterialModule,
  ]
})
export class BlogAdminModule { }
