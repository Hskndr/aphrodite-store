import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/components/contact/contact.service';
import { Observable } from 'rxjs';
import { MessageI } from 'src/app/components/contact/Message';

@Component({
  selector: 'app-blog-toolbar',
  templateUrl: './blog-toolbar.component.html',
  styleUrls: ['./blog-toolbar.component.scss']
})
export class BlogToolbarComponent implements OnInit {
  public unReadMessages$: Observable<MessageI[]>;
  public unReadCounter = '*';

  constructor(
    private dbData: ContactService
  ) { }

  ngOnInit(): void {
    this.unReadMessages$ = this.dbData.getUnread();

  }

  unReadMessage() {
  }
}
