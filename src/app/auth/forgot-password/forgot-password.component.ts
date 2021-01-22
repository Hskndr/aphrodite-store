import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  userEmail = new FormControl('');
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onReset() {
    try {
      //Sacar el email
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);

      this.router.navigate(['/verification-email']);

    } catch (error) {
      console.log(error);
    }
  }
}
