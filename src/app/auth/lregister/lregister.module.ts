import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LregisterRoutingModule } from './lregister-routing.module';
import { LregisterComponent } from './lregister.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [LregisterComponent],
  imports: [
    CommonModule,
    LregisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class LregisterModule { }
