import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/components/shared/models/user.interface';
import { AuthBlogService } from '../../services/auth-blog.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  // Devuelve el objeto user.
  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(
    public authBlogSvc: AuthBlogService,
    private authSvc: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onBlogLogout(): void {
    this.authBlogSvc.logout();
  }
}
