import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MessageModule { }
