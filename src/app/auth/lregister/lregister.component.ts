import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/components/shared/models/user.interface';

@Component({
  selector: 'app-lregister',
  templateUrl: './lregister.component.html',
  styleUrls: ['./lregister.component.scss']
})
export class LregisterComponent implements OnInit {
   // Style
   hide = true;
  //Método
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onRegister() {
    // console.log('Form->', this.registerForm.value);

    //Extraer email y password del formulario
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
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
