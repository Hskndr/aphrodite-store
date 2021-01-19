import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthBlogService } from '../services/auth-blog.service';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthBlogGuard implements CanActivate {

  constructor(
    private authBlogSvc: AuthBlogService,
    private router: Router,
  ) {

  }

  canActivate(): Observable<boolean> {
    return this.authBlogSvc.userData$.pipe(
      map(user => {
        if (!user) {
          //Redirect Login Page
          this.router.navigate(['/blog-login']);
          return false;
        }
        return true;
      })
    );
  }

}
