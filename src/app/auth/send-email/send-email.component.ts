import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnDestroy {
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(
    private authSvc: AuthService
  ) { }

  onSendVerificationEmail() {
    this.authSvc.sendVerificationEmail();
  }
  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
