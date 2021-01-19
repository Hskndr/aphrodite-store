import { Component, OnInit } from '@angular/core';
import { BlogUserI } from '../../shared/user.interface';
import { AuthBlogService } from '../../shared/services/auth-blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-login',
  templateUrl: './blog-login.component.html',
  styleUrls: ['./blog-login.component.scss']
})
export class BlogLoginComponent implements OnInit {
  blogLoginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authBlogSvc: AuthBlogService,
    private routerblog: Router,
  ) { }

  ngOnInit(): void {

  }

  onLoginBlog(form: BlogUserI) {
    this.authBlogSvc.loginByEmail(form)
      .then(res => {
        console.log('Successfully', res);
        this.routerblog.navigate(['/blog/home-blog']);
      }).catch(err => console.log('Error', err));
  }

  onBlogLogout(): void {
    this.authBlogSvc.logout();
  }
}
