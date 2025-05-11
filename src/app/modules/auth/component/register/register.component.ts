import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth.service';
import { UtilService } from '../../../../shared/services/util.service';
import { LoginResponse, RegisterRequest } from '../../../../shared/models/auth.models';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../../shared/modules/primeng/primeng.module';

@Component({
  selector: 'app-register',
  imports: [CommonModule,
    PrimeNgModule,
    TranslateModule,],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
   formRegister: FormGroup;
  
  constructor(private readonly authService:AuthService,
    private readonly fb: FormBuilder,
    private router: Router,
    private utilService: UtilService,
  ) {
    this.formRegister = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }
  
  onRegister():void {
    const request: RegisterRequest = {...this.formRegister.value}
    this.authService.register(request).subscribe({
      next:(response: LoginResponse | null) => {
        if (response) {
          this.router.navigate(['auth', 'login']);
          this.utilService.showMessage("messages.account-created", "success");
        }
      },
      error: (e) => {
        this.utilService.showMessage("messages.error-unexpected", "error");
      }
    });
  }

  get controlEmail():FormControl {
    return this.formRegister.get("email") as FormControl;
  }

  get controlPassword():FormControl {
    return this.formRegister.get("password") as FormControl;
  }
}
