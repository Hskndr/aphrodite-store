import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/components/contact/contact.service';
import { MessageI } from 'src/app/components/contact/Message';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public message$: Observable<MessageI[]>;


  public editContactForm = new FormGroup({
    id: new FormControl(''),
    read: new FormControl(''),
  });

  constructor(
    private contactSVC: ContactService,
  ) { }

  ngOnInit(): void {
    this.message$ = this.contactSVC.getAllMesages();
    console.log('ngoinit', this.message$);
  }

  readMessage(message: MessageI) {
    this.editContactForm.patchValue({
      id: message.id,
      read: true,
    });
    this.contactSVC.editMessageById(this.editContactForm.value);
  }

  unreadMessage(message: MessageI) {
    this.editContactForm.patchValue({
      id: message.id,
      read: false,
    });
    this.contactSVC.editMessageById(this.editContactForm.value);
  }


}
