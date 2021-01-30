import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/components/contact/contact.service';
import { MessageI } from 'src/app/components/contact/Message';

@Component({
  selector: 'app-msg-detail',
  templateUrl: './msg-detail.component.html',
  styleUrls: ['./msg-detail.component.scss']
})
export class MsgDetailComponent implements OnInit {

  public msgDetail$: Observable<MessageI>;

  @Input() message: MessageI;


  constructor(
    private route: ActivatedRoute,
    private contactSVC: ContactService,

  ) { }

  ngOnInit(): void {
    const idMessage = this.route.snapshot.params.id;
    this.msgDetail$ = this.contactSVC.getOneMessage(idMessage);
    console.log('msg-detail', this.msgDetail$);

  }


}
