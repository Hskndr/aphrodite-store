import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-blog-routing.module';
import { HomeBlogComponent } from './home-blog.component';
import { MaterialModule } from '../../../../../material.module';
import { BlogModule } from '../../../blog.module';
import { PostComponent } from '../../posts/post/post.component';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeBlogComponent, PostComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    BlogModule,
     // Flex layout
     FlexLayoutModule,
  ],
})
export class HomeBlogModule { }
