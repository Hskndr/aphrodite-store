import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/components/shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Style
  hide = true;
  // Método
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }
  async onGoogleLogin() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onLogin() {
    //console.log('Form->', this.loginForm.value);
    //Extraer email y password del formulario

    const { email, password } = this.loginForm.value;

    try {
      const user = await this.authSvc.login(email, password);
      this.checkUserIsVerified(user);
    } catch (error) {
      console.log(error);
    }
  }
  // Método para verificar el email
  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      // Redirect to homepage
      this.router.navigate(['/home']);
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}
