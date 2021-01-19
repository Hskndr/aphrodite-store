import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogLoginComponent } from './blog-login.component';

const routes: Routes = [{ path: '', component: BlogLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogLoginRoutingModule { }
