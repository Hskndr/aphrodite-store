import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LregisterComponent } from './lregister.component';

const routes: Routes = [{ path: '', component: LregisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LregisterRoutingModule { }
