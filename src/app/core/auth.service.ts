import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { backendUrl } from './constants/api-url';
import { UtilService } from '../shared/services/util.service';
import { LoginRequest, LoginResponse, RegisterRequest } from '../shared/models/auth.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private PATH_ROOT = 'authentication';  

  constructor(private http: HttpClient, private utilService: UtilService) {}

  login(request: LoginRequest): Observable<LoginResponse | null> {
    this.logout();
    return this.http.post<LoginResponse>(`${backendUrl(this.PATH_ROOT)}/login`, { ...request})
      .pipe(
        catchError((error) => {
          this.utilService.showMessage("Usuario o Contraseña incorrectos", "error");
          return of(null);
        })
      );
  }

  register(request: RegisterRequest): Observable<LoginResponse | null> {
    this.logout();
    return this.http.post<LoginResponse>(`${backendUrl(this.PATH_ROOT)}/register`, { ...request});
  }

  getToken(): string {
    return localStorage.getItem('authToken') || '';
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token.length > 0 && !this.isTokenExpired(token);
  }

  private isTokenExpired(token: string): boolean {
    const decoded = this.decodeToken(token);
    const expirationDate = new Date(decoded.exp * 1000);
    return expirationDate < new Date();
  }

  private decodeToken(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }
}
