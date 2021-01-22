import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {
  public opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
