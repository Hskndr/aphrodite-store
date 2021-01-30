import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';
import { MsgDetailComponent } from './msg-detail/msg-detail.component';
import { DateFirebasePipe } from 'src/app/components/shared/pipe/date-firebase.pipe';


@NgModule({
  declarations: [
    MessageComponent,
    MsgDetailComponent,
    DateFirebasePipe,

  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MessageModule { }
