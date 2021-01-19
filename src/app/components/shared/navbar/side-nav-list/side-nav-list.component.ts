import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent implements OnInit {

  public user$: Observable<User> = this.authSvc.afAuth.user;


  @Output() sidenavClose = new EventEmitter();
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);

    } catch (error) {
      console.log(error);
    }
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
