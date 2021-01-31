import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgUploadFilesDirective } from './directives/ng-upload-files.directive';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [UploadImageComponent, NgUploadFilesDirective],
  imports: [
    CommonModule,
    UploadImageRoutingModule,
    MaterialModule,

  ]
})
export class UploadImageModule { }
