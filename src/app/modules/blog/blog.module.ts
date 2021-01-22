import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { NewPostModule } from './components/posts/new-post/new-post.module';

import { BlogComponent } from './blog.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { MaterialModule } from '../../material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { MatCarouselModule } from 'ng-mat-carousel';

@NgModule({
  declarations: [
    BlogComponent,
    NewPostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
    DetailsPostComponent,
  ],
  entryComponents: [ModalComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NewPostModule,
    MaterialModule,
    ReactiveFormsModule,
    EditPostModule,
    // Carousel
    MatCarouselModule.forRoot(),
  ],
  exports: [ToolbarComponent]
})
export class BlogModule { }
