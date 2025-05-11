import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { AuthService } from './core/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterModule, TranslateModule, ToastModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'quipux_playlist_frontend';
  constructor(private translate : TranslateService, 
    private router : Router, private authService : AuthService) {
      }
}
