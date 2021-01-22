import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/components/contact/contact.service';
import { MessageI } from 'src/app/components/contact/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public message$: Observable<MessageI[]>;
  constructor(
    private contactSVC: ContactService,
  ) { }

  ngOnInit(): void {
    this.message$ = this.contactSVC.getAllMesages();
  }

}
