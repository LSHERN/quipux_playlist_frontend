import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../../../core/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-principal',
  imports: [RouterModule,TranslateModule, ButtonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  constructor(private router : Router, private authService : AuthService) {
      }

      onLogout():void {
    this.authService.logout();
    this.router.navigate(["auth", "login"])
  }
}
