import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogLoginRoutingModule } from './blog-login-routing.module';
import { BlogLoginComponent } from './blog-login.component';
import { BlogModule } from '../../blog.module';
import { MaterialModule } from '../../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BlogLoginComponent],
  imports: [
    CommonModule,
    BlogLoginRoutingModule,
    BlogModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class BlogLoginModule { }
