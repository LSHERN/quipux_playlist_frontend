import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest, LoginResponse } from '../../../../shared/models/auth.models';
import { AuthService } from '../../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
formLogin: FormGroup;

  constructor(private readonly authService:AuthService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {
    this.formLogin = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onLogin():void {
    const request: LoginRequest = {...this.formLogin.value}
    this.authService.login(request).subscribe({
      next:(response: LoginResponse | null) => {
        if (response) {
          this.authService.saveToken(response.token);
          this.router.navigate(['']);
        }
      }
    });
  }

  get controlEmail():FormControl {
    return this.formLogin.get("email") as FormControl;
  }

  get controlPassword():FormControl {
    return this.formLogin.get("password") as FormControl;
  }
}
