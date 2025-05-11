import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject the current AuthService and use it to get an authentication token:
  const router = inject(Router);
  const authToken =  getAuthToken();

  // Clone the request to add the authentication header.
  if(!authToken){
    return next(req);
  }
  const authRequest = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
  });

  return next(authRequest);
}

function getAuthToken(): string | null {
    const router = inject(Router);
    const token: string | null = localStorage.getItem('authToken');
    const urlSegments = router.url.split('/');
    const lastPartUrl = urlSegments[urlSegments.length - 1];
    if (!token && lastPartUrl !== "register") {
      router.navigate(['auth', 'login']);

    }
    return token;
  }